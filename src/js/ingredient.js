import * as nameView from './views/nameView';
import Global from './model/Global';
import * as ingView from './views/ingredientView';
import { elements, ingElements } from './views/base';
import * as globalView from './views/globalView';
import { state } from './global';

// Event Listeners for pagination
ingElements.searchIngredientListButtons.addEventListener('click', async e => {

    if(e.target.closest('.page-btn')){
        const onPage = e.target.dataset.onpage;
        clearData();
        ingView.renderResults(state.search.ingredient, onPage);
        ingView.togglePageButtons(onPage);
    }else if(e.target.matches('.btn-prev, .btn-prev *')){
      // Find out which button is active and return the data number
      const buttonActive = parseInt(ingView.findActive());
      // Reduce one becasue we are going back one page
      const page = buttonActive - 1;
      // If button active is not 0
      if(page !== 0){
        clearData();
      // Rende the results
      ingView.renderResults(state.search.ingredient, page);
      // aplly the class active on new page
      ingView.togglePageButtons(page);
      }
    }else if(e.target.matches('.btn-next, .btn-next *')){
      // Find out which button is active and return the data number
      const buttonActive = parseInt(ingView.findActive());
      // Reduce one becasue we are going back one page
      const page = buttonActive + 1;
      const numberOfPages = Math.ceil(state.search.ingredient.length / 16);
      if(page <= numberOfPages ){
        clearData();
        // Rende the results
        ingView.renderResults(state.search.ingredient, page);
        // aplly the class active on new page
        ingView.togglePageButtons(page);
      }

    }
});
// CLEAR BUTTONS AND RESULTS
const clearData = () => {
globalView.clearPrevResults();
ingView.clearPrevButtons();
};
