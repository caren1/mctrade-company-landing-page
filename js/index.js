var offerButtons = document.querySelectorAll(".card-description a");
var offers = document.querySelectorAll(".offer-section__cards-card-details");

var cardDetailsLeftArrows = document.querySelectorAll(".offer-section .offer-section__cards-card-details .card-details-header a.close");

var desktopScreen = window.matchMedia("(min-width: 1020px)");
// var belowDesktopScreen = window.matchMedia("(max-width: 1024px)");

var offerSection = document.querySelector("section.offer-section");
var offerHeader = document.querySelector("section.offer-section offer-section__cards");
var offerIntroduction = document.querySelector("section.offer-section offer-section__introduction");

var backdrop = document.querySelector(".backdrop");

var belowDesktopScreen = window.screen.availWidth;



cardDetailsLeftArrows.forEach(element => {
    element.addEventListener('click', () => {
        offers.forEach(offer => {
            offer.classList.remove("flexit");
            offerSection.classList.remove("fullheight");
        })
    })
});

offerButtons.forEach(element => {
    element.addEventListener('click', () => {

        var elementId = element.className;

        offers.forEach(element => {
            if (element.classList.contains(elementId)) {
                offers.forEach(element => {
                    element.classList.remove("flexit");
                });

                if (desktopScreen.matches) {
                    // offerSection.classList.toggle("fullheight");
                    element.classList.toggle("flexit");
                    document.getElementsByClassName("flexit").focus();


                } else if (belowDesktopScreen) {
                    element.classList.toggle("flexit");
                    document.getElementsByClassName("flexit").focus();
                    // offerSection.classList.remove("fullheight");
                }
            }
        });
    })
});



function noLongerDesktop() {
    if (belowDesktopScreen < 1025) {

        offerSection.classList.remove("fullheight");
        // offerSection.style.height = "100%";
    }
}

noLongerDesktop();

function closePrevious() {
    if (element) {
        element.classList.remove("flexit");
    }
}

function setFocus(elementToFocus) {
    document.getElementsByClassName(elementToFocus).focus()
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); 
}