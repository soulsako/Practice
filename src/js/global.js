//IMPORT CSS AND HTML FILES
import '../css/main.scss';
//IMPORT JQUERY
import 'jquery';
import Global from './model/Global';
import * as globalView from './views/globalView';
import * as ingView from './views/ingredientView';
import { elements, ingElements } from './views/base';
import * as other from './libraries/other';

// Jquery code for nav slide toggle
other.slideToggleNav();
// slide toggle and scroll to top
other.slideLikeBtnScroll();
export const state = {};
// Event listenenr which will render liked coctails from local sotrage
document.addEventListener('DOMContentLoaded', () => {
  // Display liked cocktails from localStorage
  state.global = new Global();
  // Set this.likes array with all the cocktails stored in the storage
  state.global.setLikes();
  // Render the liked cocktail on UI
  if(state.global.likesLength() > 0){
      state.global.likes.forEach(curr => {
      globalView.renderLikeModal(curr);
    });
  }
});

// Event listener for forms
elements.btnForm.addEventListener('click', async e => {
  e.preventDefault();
  // Type of input
    const type = elements.type.value;
    const input = elements.searchInput.value;
     if(isNaN(input) && input !== ''){
      state.search = new Global();

    if(type === 'name'){
      await state.search.getRBN(input);
      if(state.search.name !== null){
        formExtras(state.search.name.length, input);
        state.search.name.forEach(curr => globalView.renderDefaultDrinks(curr, elements.searchList));
      }else {
        clearAndDisplay();
      }
    }else if(type === 'ingredient'){
      await state.search.getRBI(input);
      if(state.search.ingredient !== null){
        formExtras(state.search.ingredient.length, input);
        ingView.renderResults(state.search.ingredient);
      }else {
        clearAndDisplay();
      }
    }
  }else {
    globalView.displayMessage('Please enter a name', 'alert');
  }
    globalView.clearInput();
});

const formExtras = (length, input) => {

  elements.search.style.display = 'block';
  elements.searchResultsHeading.innerHTML = `<span class="heading-long__number">${length}</span>cocktails found for<span class="heading-long__search">'${input}'</span>`;
  globalView.clearPrevResults();

};

const clearAndDisplay = () => {
  elements.search.style.display = 'none';
  globalView.displayMessage('Please try a different name', 'alert');
};

// EVENT LISTENER MAIN FOR ALL THE LIKE BUTTONS
elements.searchList.addEventListener('click', async e => {

  //const id = e.target.closest('.cocktails__item').dataset.drinkid;

//   if(e.target == e.currentTarget{
//     console.log("itemClicked");
//      // if(!state.global)state.global = new Global();
//      // if(state.global.isLiked(id)){
//      //   // Remove the item from dataset
//      //   state.global.removeLike(id);
//      //   // Toggle the button
//      //   globalView.toggleLikeButton(true, id);
//      //   // Remove from UI
//      //   likeView.removeLike(id);
//      // }else {
//      //   // Get title, img
//      //   const img = e.target.nextElementSibling.src;
//      //   const title = e.target.nextElementSibling.nextElementSibling.textContent.split(' ');
//      //   title.splice(-1, 1);
//      //   const newTitle = title.join();
//      //   const finalTitle = newTitle.replace(',', ' ');
//      //   // Add the item to the data
//      //   const drink = state.global.addLike(finalTitle, img, id);
//      //   // Toggle the button
//      //   globalView.toggleLikeButton(false, id);
//      //   // Display the item on UI
//      //   globalView.renderLikeModal(drink);
//      // }
//
//   // Event Listener when any item clicked and displays recipe
 if(e.target.closest('.cocktails__item')){
    console.log("hello");


    // globalView.clearPrevRecipe();
    // globalView.displaySpinner();
    // globalView.displayModal();
    // if(!state.global)state.global = new Global();
    // await state.global.getRBID(id);
    //   globalView.renderRecipe(state.global.idDrink[0]);
    //   globalView.hideSpinner();

    }
});

// Event listen for the close button on recipe modal__icon
elements.modal.addEventListener('click', e => {
  if(e.target.matches('.recipe__icon, .recipe__icon *'))globalView.hideModal();
});


// Remove liked item from liked List button
elements.likeModal.addEventListener('click', e => {
  if(e.target.closest('.likedBtn')){
    // Remove from localStorage
       const id = e.target.closest('.liked__item').dataset.drinkid;
       state.global.removeLike(id);
   // Remove from UI
       globalView.removeLike(id);
   // toggle heart shape icon
       globalView.changeHeartIcon(id);
  }
});
