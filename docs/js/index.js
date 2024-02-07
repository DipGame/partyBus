let banerSwiper = new Swiper(".banerSwiper", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    loop: true,
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});
let slider_1Swiper = new Swiper(".slider_1Swiper", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".swiper-button-next-slider_1",
        prevEl: ".swiper-button-prev-slider_1",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        645: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1048: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});
let slider_2Swiper = new Swiper(".slider_2Swiper", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".swiper-button-next-slider_2",
        prevEl: ".swiper-button-prev-slider_2",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        1044: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1636: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});
let slider_3Swiper = new Swiper(".slider_3Swiper", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".swiper-button-next-slider_3",
        prevEl: ".swiper-button-prev-slider_3",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        645: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1048: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

// Скрипт три линии
$(function () {
    $('#nav-icon4').click(function () {
        $(this).toggleClass('open');
    });
});

// Скрипт появления моб меню

if (document.querySelector('#nav-icon4')) {
    const navIcon = document.querySelector('#nav-icon4');
    const overlayMenu = document.querySelector('.overlay__box')
    const box = document.querySelector('.box')

    function toggleMobMenu() {
        overlayMenu.classList.toggle('overlay_open');
        box.classList.toggle('box_open');
    }

    function removeMobMenu() {
        overlayMenu.classList.remove('overlay_open');
        box.classList.remove('box_open');
    }

    overlayMenu.addEventListener('click', () => {
        removeMobMenu();
        if (navIcon.classList.contains('open')) {
            navIcon.classList.remove('open');
        }
    })

    navIcon.addEventListener('click', () => {
        toggleMobMenu();
    })
}

// Скрипт submenu мобилка 
if (document.querySelector('.parent')) {
    const parent = document.querySelectorAll('.parent');

    parent.forEach(element => {
        element.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            element.classList.toggle('parent_active');
        })
    });
}