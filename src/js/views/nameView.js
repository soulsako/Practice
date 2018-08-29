import { elements } from './base';




export const hideSpinner = () => elements.spinner.style.display = 'none';
export const displaySectionSearch = () => elements.sectionSearch.style.display = 'block';






    

    export const renderDefaultDrinksLiked = (drink, list) => {
      const markup = `

                    <a class="cocktails__item" data-drinkid="${drink.idDrink}">
                    <figure class="cocktails">
                    <svg class="cocktails__icon"><use xlink:href="img/sprite.svg#icon-heart2"></use></svg>
                    <img src="${drink.strDrinkThumb}" class="cocktails__img">
                    <div class="cocktails__title">${drink.strDrink}<br> Recipe</div>
                    </figure>
                    </a>`;
      list.insertAdjacentHTML('beforeend', markup);
    };



const modifyCategory = category => {

  const newCategory = category.split(' ').join('_');
  return newCategory;
};
