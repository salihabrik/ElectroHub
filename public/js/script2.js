
// Swiper initialization for the books-slider
new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Swiper initialization for the featured-slider
new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        450: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 6,
        },
    },
});

// Swiper initialization for the arrivals-slider
new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

const imgs = document.querySelectorAll('.header-slider ul img ');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

changeSlide();

prev_btn.addEventListener('click', (e)=>{
    if (n < 0) {
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})

next_btn.addEventListener('click', (e)=>{
    if (n < imgs.length - 1) {
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll(".products");

for (const item of scrollContainer) {
    item.addEventListener("wheel", (e) => {
        e.preventDefault();
        if (e.deltaY > 0) {
            item.scrollLeft += 100;
        } else {
            item.scrollLeft -= 100;
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.arrivals-slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.arrivals-slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            }
        }
    });
});

        document.addEventListener('DOMContentLoaded', function () {
    const booksSwiper = new Swiper('.books-slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
    },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper for featured slider
    const featuredSlider = new Swiper(".featured-slider", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 5,
            },
        },
    });
});
// Carousel Auto-Cycle
  $(document).ready(function() {
    $('.carousel').carousel({
      interval: 6000
    })
  });
 // Get the close button element
    var closeButton = document.querySelector('.modal-close-btn');

    // Get the modal element
    var modal = document.querySelector('.modal');

    // Get the modal overlay element
    var overlay = document.querySelector('.modal-close-overlay');

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none'; // Hide the modal
    }

    // Add click event listener to close button
    closeButton.addEventListener('click', function() {
        closeModal(); // Call the closeModal function when close button is clicked
    });

    // Add click event listener to overlay
    overlay.addEventListener('click', function() {
        closeModal(); // Call the closeModal function when overlay is clicked
    });

    // Function to open the modal
    function openModal() {
        modal.style.display = 'block'; // Show the modal
    };

    
    


