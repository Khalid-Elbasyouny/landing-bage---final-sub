my structure to make a dynamic navigation bar useing a "ul" throw a few steps (1)-create the variable "navCont" and link it to the class .navbar__list. (2)- creat the variable  "allSecs"  and make it a "Array" that contains all the sections dynamicly or just by adding a new section to the HTML code by creating for loob that adds a "li" with a link to reach the section by his "href" and give it the class ".menu__link" from the css code (3) append the navCont  
active class, in fact it was a little spisy ,using the window proprity while scroll the give a function that takes all the section and using the forEach and with a sec fuction with a activeWindow paramiter countaines the if coundition that tills us if the section is active by the user or not. Using the "getBoundingClientReact()" so if the top in range -300 to 250 ,the active class will be added by the .classList . A nd if its not remove the active class  .
Make the section land softly by just clicking on it in the nav bar: by adding the .addEventListener to the navList so that with the click a function  with the parametre land created then  ".prevenrDefault()" .then make a if stat. with condition that if the list item is the target by the data nav that has been gaven before manually lands to the section by the "getElementById"method and add the smooth behavior by the "scrollIntoView" method
then a smal200ms  timeout to make the movement more smoothy to the eyeseen 