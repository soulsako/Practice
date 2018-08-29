//IMPORT TYPED
import Typed from 'typed.js';
//IMPORT JAVASCRIPT FILES
import Global from './model/Global';
import * as nameView from './views/nameView';
import * as globalView from './views/globalView';
import * as other from './libraries/other';
import { elements } from './views/base';

  // TYPED JS BANNER TEXT
  other.typedHeading();
 // GLOBAL STATE OBJECT
  const state = {};
 // FUNCTION THAT RETRIVES AND DISPLAYS DEFAULT 12 RECIPES
//   const defaultRecipes = async () => {
//    // Create an array with names of default drinks to be displayed on page load
//    let nameArray = ['aviation', 'bloody mary', 'cosmopolitan', 'martini', 'french 75', 'black russian', 'manhattan', 'margarita', 'mojito', 'moscow mule', 'pina colada', 'white russian'];
//    // Initialise the object
//    state.name = new Name();
//    // Store all the titles of cocktails in local storage in an array (With lower cases)
//    let likeNames = JSON.parse(localStorage.getItem('likes'));
//    likeNames.map(el => el.title.toLowerCase());
//    if(likeNames){
//      const likedArray = nameArray.filter(name => likeNames.includes(name));
//      const likedCoctails = [];
//      likedArray.forEach(curr => likedCoctails.push(state.name.get1RBN(curr)));
//      likedCoctails.forEach(curr => curr.then(res => nameView.renderDefaultDrinksLiked(res, elements.cocktailsList)));
//      const unLikedArray = nameArray.filter(name2 => !likeNames.includes(name2));
//      const unlikedCoctails = [];
//      unLikedArray.forEach(curr => unlikedCoctails.push(state.name.get1RBN(curr)));
//     unlikedCoctails.forEach(curr => curr.then(res => nameView.renderDefaultDrinks(res, elements.cocktailsList)));
//    }
// }
//     // EVENT LISTENER WHEN PAGE LOADS
//    document.addEventListener('DOMContentLoaded', defaultRecipes);
