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
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
    linkWork.forEach(x => x.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(x => x.addEventListener("click", activeWork))

/*===== Work Popup =====*/
document.addEventListener("click" , (e) => {    
    if(e.target.classList.contains("work__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    } 
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}
document.querySelector('.portfolio__popup-close').addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
   document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
   document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
   document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}



/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".services__modal"),
      modalBtns = document.querySelectorAll(".services__button"),
      modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function(modalClick) {
    modalViews[modalClick].classList.add("active-modal");
}     

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove("active-modal");
        })
    })
})















/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/
