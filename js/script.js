var offerButtons = document.querySelectorAll(".card-description a");
var offers = document.querySelectorAll(".offer-section__cards-card-details");

var cardDetailsLeftArrows = document.querySelectorAll(".offer-section .offer-section__cards-card-details .card-details-header i");

cardDetailsLeftArrows.forEach(element => {
    element.addEventListener('click', () => {
        offers.forEach(offer => {
            offer.classList.remove("flexit");
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
                element.classList.toggle("flexit");
                document.getElementsByClassName("flexit").focus();
            }
        });
    })
});

function closePrevious() {
    if (element) {
        element.classList.remove("flexit");
    }
}

function setFocus(elementToFocus) {
    document.getElementsByClassName(elementToFocus).focus()
}