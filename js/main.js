/*=============== SHOW SIDEBAR ===============*/


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll("[data-target"),
    tabcontent = document.querySelectorAll('[data-content');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabcontent.forEach(tabcontents => {
         tabcontents.classList.remove("skills__active")   
        })
        target.classList.add("skills__active")

        tabs.forEach(tab => {
         tab.classList.remove("skills__active")   
        })
        tab.classList.add("skills__active")
    })
})
/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/*===== Link Active Work =====*/


/*===== Work Popup =====*/


/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/
