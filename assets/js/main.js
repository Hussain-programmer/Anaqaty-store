// Start Main Banner Slider
$('.slider-banner').owlCarousel({
    loop: true,
    autoplay:true,
    items:1,
    margin:0,
    responsiveClass:true,
    dots: true,
    nav: true,
    stagePadding: 50,
    autoplayTimeout: 4000,
    smartSpeed:500,
    
})

// Services
$('.services').owlCarousel({
    loop:false,
    margin:0,
    nav: false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        768:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
// ----------------------------------------------------------------------

// Start Brands Section

$('.brands').owlCarousel({
    loop: false,
    autoplay:false,
    margin:10,
    responsiveClass:true,
    dots: false,
    nav: false,
    responsive:{
        0:{
            items:2
        },
        500:{
            items:3
        },
        768:{
            items:4
        },
        1000:{
            items:6
        }
    }
    
})

// ----------------------------------------------------------------------

// New Arrivals Filter
var owl = $('.cards').owlCarousel({
    loop: false,
    margin:20,
    nav: false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
})

$( '.switcher' ).on( 'click', '.item', function() {

    var $item = $(this);
    var filter = $item.data( 'owl-filter' )

    owl.owlcarousel2_filter( filter );

})

let switcher = document.querySelectorAll(".switcher li");

switcher.forEach(li => {
    li.addEventListener("click", removeActiveSwitcher);
});

function removeActiveSwitcher() {
    switcher.forEach(el => {
        el.classList.remove("active");
    });
    this.classList.add("active");
};

// show more details

let showBtn = document.querySelectorAll(".show-more");
console.log(showBtn);
let closeBtnForMoreDetails = document.getElementById("close-icon");
let modal = document.querySelector(".modal-show .box-details");
let modalParent = document.querySelector(".modal-show");

showBtn.forEach(el => {
    el.addEventListener("click", modalShow);
})

closeBtnForMoreDetails.addEventListener("click", closeModalShow)

function modalShow() {
    modal.classList.add("show");
    modalParent.classList.add("show-parent");
};

function closeModalShow() {
    modal.classList.remove("show");
    modalParent.classList.remove("show-parent");
    
};


// ----------------------------------------------------------------------

// CountTime Down

let countDown = new Date("Dec 31, 2022 23:59:59").getTime();



let counter = setInterval(() => {
    // Get Date Now
    let dateNow = new Date().getTime();

    // Find The Date Difference Between Now And Countdown Date
    let dateDiff = countDown - dateNow;
    
    // Get Time Units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));

    let seconds = Math.floor(dateDiff % (1000 * 60) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}`:days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}`:hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`:minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`:seconds;

    if (dateDiff < 0 || dateDiff == 0) {
        clearInterval(counter);
    };

},1000);

// ----------------------------------------------------------------------

// Show & Hide Popup

let popupModal = document.querySelector(".login-popup");
let popupBox = document.querySelector(".login-popup .box-parent");
let closePopupIcon = document.querySelector(".close-icon-popup");
let dontShowPopupCheckbox = document.getElementById("checkbox");

if (!popupModal.classList.contains("show-popup")) {
    setTimeout(() => {
        popupModal.classList.add("show-popup");
        popupBox.classList.add("show");
    }, 60000);
}

closePopupIcon.addEventListener("click", closePopupModal);

function closePopupModal() {
    if (dontShowPopupCheckbox.checked) {
        popupModal.classList.remove("show-popup");
        popupBox.classList.remove("show");
    } else {
        popupModal.classList.remove("show-popup");
        popupBox.classList.remove("show");
        setTimeout(() => {
            popupModal.classList.add("show-popup");
            popupBox.classList.add("show");
        }, 60000);
    }
    
};

// ----------------------------------------------------------------------

// Testimonials Section

$('.testimonial').owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true,
    smartSpeed:500,
    autoplayTimeout: 5000,
    dots: true,
    nav:false,
});

// ----------------------------------------------------------------------

// Start Articles Section

$('.articles').owlCarousel({
    loop: false,
    margin: 0,
    dots: false,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        992:{
            items:3
        },
        1100:{
            items:5
        }
    }
});

// ----------------------------------------------------------------------