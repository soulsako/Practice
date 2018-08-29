//IMPORT TYPED
import Typed from 'typed.js';
// Jquery code for nav slide toggle
export const slideToggleNav = () => {

  $('.navigation__hamburger').click(() => {
    const nav = $('.navigation__list');
    nav.slideToggle(200);
  });
};
// slide toggle and scroll to top
export const slideLikeBtnScroll = () => {
  $(function() {
  $( "#likeButton" ).on( "click", function() { //Click
  $( "#likeModal" ).slideToggle( "fast", function(){
    if ($(this).is(":visible")) { //Check to see if element is visible then scroll to it
                $('html,body').animate({ //animate the scroll
                 scrollTop: $(this).offset().top - 100 // the - 100 is to stop the scroll 100px above the element
               }, "slow")
           }
       });
     return false; //This works similarly to event.preventDefault(); as it stops the default link behavior
   });
});
};
// TYPED JS BANNER TEXT
export const typedHeading = () => {
    const typed = new Typed('#typed', {
    strings: ["over 500 coctail recipes", "alcoholic cocktails", "non-alcoholic cocktails"],
    backSpeed: 50,
    typeSpeed: 50,
    loop: true
  });
};
