import axios from 'axios';
export default class GLobal {

  constructor(){
    this.likes = [];
  }
  async get1RBN(name){
    try {
      const result = await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
      const defaultDrinks = result.data.drinks[0];
      return defaultDrinks;
    }catch(error){
      console.log(error);
    }
  }
  async getRBN(name){
    try {
      const result = await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
      this.name = result.data.drinks;
    }catch(error){
      console.log(error);
    }
  }
  async getRBI(ingredient){
    try {
      const result = await axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      this.ingredient = result.data.drinks;
    }catch(error){
      console.log(error);
    }
  }

  async getRBID(id){
    try {
      const result = await axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      this.idDrink = result.data.drinks;
    }catch(error){
      console.log(error);
    }
  }
  addLike(title, img, id){
    const item = {
      title,
      img,
      id
    };
    this.likes.push(item);
    localStorage.setItem('likes', JSON.stringify(this.likes));
    return item;
  }
  removeLike(id){
    const index = this.likes.findIndex(curr => curr.id === id);
    this.likes.splice(index, 1);
    localStorage.setItem('likes', JSON.stringify(this.likes));
  }
  isLiked(id){
    // If true then drink is already liked and exists in the alikes array
    return this.likes.findIndex(curr => curr.id === id) !== -1;
  }
  likesLength(){
    return this.likes.length;
  }
  setLikes(){
    const likes = JSON.parse(localStorage.getItem('likes'));
    if(likes)this.likes = likes;
  }
}
