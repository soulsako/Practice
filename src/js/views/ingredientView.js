import { elements, ingElements} from './base';
import * as nameView from './nameView';
import * as globalView from './globalView';

export const clearPrevButtons = () => ingElements.searchIngredientListButtons.innerHTML = '';

export const renderResults = (allDrinks, page = 1, resPerPage = 16) => {
// allDrinks is an array of 81 Drinks
// We want to display 16 drinks per page
const start = (page - 1) * resPerPage;// 0 16 32
const end =  page * resPerPage;// 16 32 48

allDrinks.slice(start, end).forEach(drink => globalView.renderDefaultDrinks(drink, elements.searchList));
clearPrevButtons();
pagination(allDrinks.length, page, resPerPage);

};
// Pagination will render buttons
const pagination = (totDrinks, page, resPerPage) => {

  const pages = Math.ceil(totDrinks / resPerPage);
  const allButtons = renderButtons(pages);
  const markup = `
                <button class="btn-red-outline btn-prev" id="ingButtons">
                  <svg class="btn-red-outline__icon">
                    <use xlink:href="img/sprite.svg#icon-circle-left"></use>
                  </svg>
                </button>
                ${allButtons.map(button => button).join(' ')}
                <button class="btn-red-outline btn-next">
                  <svg class="btn-red-outline__icon">
                    <use xlink:href="img/sprite.svg#icon-circle-right"></use>
                  </svg>
                </button>`;
  ingElements.searchIngredientListButtons.insertAdjacentHTML('afterbegin', markup);
  const element = document.querySelector('[data-onpage="1"]');
  if(element)element.classList.add('active');
};
const renderButtons = pages => {
  let buttonsArray = [];
  for(let i = 1; i <= pages; i++){
    buttonsArray.push(`<button class="btn-red-outline page-btn" data-onpage="${[i]}">${[i]}</button>`);
  }
  return buttonsArray;
}

export const togglePageButtons = (num) => {
  const arrayOfButtons = Array.from(document.querySelectorAll('.page-btn'));
  arrayOfButtons.forEach(curr => curr.classList.remove('active'));
  const element = document.querySelector(`[data-onpage="${num}"]`);
  if(element)element.classList.add('active');
}

export const findActive = () => {
let buttonActive;
const element = document.querySelector('.active');
if(element){
buttonActive = element.dataset.onpage;
}
return buttonActive;
};
