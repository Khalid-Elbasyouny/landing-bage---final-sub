const navCont = document.getElementById("navbar__list");
const sectionsArray = Array.from(document.querySelectorAll("section"));

function createListItem() {
    for (sec of sectionsArray) {
        listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a>`;
        navCont.appendChild(listItem);

    }
}
createListItem();
//styling for the active states getboundingClientRect
window.onscroll = function () {
    document.querySelectorAll("section").forEach(function (activeWindow) {
        
        if(activeWindow.getBoundingClientRect().top >= -300 &&activeWindow.getBoundingClientRect().top <= 250) {
            activeWindow.classList.add("your-active-class");
        }else{activeWindow.classList.remove("your-active-class");
        }
    });
};
//when clicking an item from the navigation menu, the link should scroll to the appropriate section. 
navCont.addEventListener("click", (land) => {
    land.preventDefault();
    if(land.target.dataset.nav) {
        document
            .getElementById(`${land.target.dataset.nav}`)
            .scrollIntoView({ behavior: "smooth" });   
    setTimeout(() => {location.hash = `${land.target.dataset.nav}`}, 200);
    }
});