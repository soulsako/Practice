import { elements, ingElements } from './base';

export const clearPrevResults = () => elements.searchList.innerHTML= '';
export const clearPrevRecipe = () => elements.modalContent.innerHTML = '';
export const displaySpinner = () => elements.spinner.style.display = 'block';
export const hideSpinner = () => elements.spinner.style.display = 'none';

export const clearInput = () => {
elements.searchInput.value = '';
elements.searchInput.focus();
};


export const displayModal = () => {
  elements.modal.style.display = 'block';
   $('.modal__content').slideToggle(200);
};

export const renderRecipe = recipe => {
    const ingredients = getIngredients(recipe);
    const markup = `
    <div class="recipe" id="recipe">
        <div class="recipe__title">
          <span class="recipe__title-span">${recipe.strDrink}</span>
        </div>
        <figure class="recipe__fig">
          <img src="${recipe.strDrinkThumb}" alt="Cocktail" class="recipe__img">
        </figure>
        <div class="recipe__info">
          <h4 class="recipe__info-heading">Instructions</h4>
          <p class="recipe__info-text">${recipe.strInstructions}</p>
          <h4 class="recipe__info-heading">Ingredients</h4>
          <ul class="recipe__info-ingredients">
            ${ingredients.map(el => renderIng(el)).join(' ')}
          </ul>
        </div>
        <div class="recipe__categories">
          <div class="recipe__categories-category">Category :</div>
          <div class="recipe__categories-text recipe__categories-text-btn">${recipe.strCategory}</div>
          <div class="recipe__categories-category">Alcohol/Non-Alcoholic :</div>
          <div class="recipe__categories-text">${recipe.strAlcoholic}</div>
          <div class="recipe__categories-category">Glass :</div>
          <div class="recipe__categories-text">${recipe.strGlass}</div>
          <div class="recipe__categories-category">Cocktail Type :</div>
          <div class="recipe__categories-text">${recipe.strIBA}</div>
        </div>
        <svg class="recipe__icon">
          <use xlink:href="img/sprite.svg#icon-cross"></use>
        </svg>
    </div>`;

  elements.modalContent.insertAdjacentHTML('afterbegin', markup);

};

  const getIngredients = recipe => {
    let ingredients = [];
    for(let i = 1; i < 16; i++){
      let ingObj = {};
      if(recipe[`strIngredient${i}`] !== ''){
        ingObj.ingredient = recipe[`strIngredient${i}`];
        ingObj.measure = recipe[`strMeasure${i}`];
        ingredients.push(ingObj);
      }
    }
    return ingredients;
  };
  const renderIng = ing => `<li class="recipe__info-ingredients-item"><strong>${ing.ingredient}:&nbsp;</strong>${ing.measure}</li>`;

  export const toggleLikeButton = (isLiked, id) => {

    const ref = isLiked ? "img/sprite.svg#icon-heart" : "img/sprite.svg#icon-heart2";
    const element = document.querySelector(`[data-drinkid="${id}"] use`);
    if(element)element.setAttribute('href', ref);
  };

  export const renderLikeModal = drink => {

  const markup = `
                  <li class="liked__item" data-drinkid="${drink.id}">
                    <figure class="liked__fig">
                      <img src="${drink.img}" class="liked__img">
                      <div class="liked__title">
                        <h2 class="liked__heading">${drink.title}</h2>
                      </div>
                    </figure>
                    <button class="btn-red-outline likedBtn">Remove</button>
                  </li>`;

    elements.likedList.insertAdjacentHTML('beforeend', markup);
  };

  export const hideModal = () => {
    $('.modal__content').slideToggle(200);
    setTimeout(() => {
      elements.modal.style.display = 'none';
    }, 200);
  };

  export const removeLike = id => {
    const element = document.querySelector(`[data-drinkid="${id}"]`);
    if(element)element.remove();
  };

  export const changeHeartIcon = id => document.querySelector(`[data-drinkid="${id}"] use`).setAttribute('href', 'img/spite.svg#icon-heart');

  export const displayMessage = (msg, className) => {

    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(msg));

    const childNode = document.querySelector('.form__search'),
          parentNode = childNode.parentElement;
    parentNode.insertBefore(div, childNode);

    setTimeout(() => {
      const element = document.querySelector('.alert');
      if(element)element.remove();
    }, 3000);

  };

  export const removeMessage = () => {
    const element = document.querySelector('.alert');
    if(element)element.remove();
  };

  export const renderDefaultDrinks = (drink, list) => {

  const markup = `

  <a class="cocktails__item" data-drinkid="${drink.idDrink}">
  <figure class="cocktails">
  <svg class="cocktails__icon"><use xlink:href="img/sprite.svg#icon-heart"></use></svg>
  <img src="${drink.strDrinkThumb}" class="cocktails__img">
  <div class="cocktails__title">${drink.strDrink}<br> Recipe</div>
  </figure>
  </a>`;

  list.insertAdjacentHTML('beforeend', markup);
  };
