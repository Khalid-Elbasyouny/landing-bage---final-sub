my structure to make a dynamic navigation bar useing the "ul" throw a few steps (1)-create the variable navbar and link it to the class .navbar__list. (2)- creat the variable  sections and make it a Array that contains all the sections dynamicly or just by adding a new section to the HTML code by creating for loob that add a "li" with a link to reach the section by by his href and give it the class .menu__link from the css code (3) append the nav list 
active class, in fact it was a little spisy ,using the window proprity while scroll the give a function that takes all the section and using the forEach and with a sec fuction with a active paramiter countaines the if coundition that tills us if the section is active by the user or not. Using the "getBoundingClientReact()" so if the top in range -400 to 150 ,the active class will be added by the .classList . A nd if its not remove the active class  .
Make the section land softly by just clicking on it in the nav bar: by adding the .addEventListener to the navList so that with the click a function  with the parametre toSec created then  ".prevenrDefault()" .then amke a if stat. with condition that if the list item is the target by the data nav that has been gaven before manually lands to the section by the "getElementById"method and add the smooth behavior by the "scrollIntoView" method
then a smal170ms  timeout to make the mavement more smoothy to the eye
