window.addEventListener("load", () => {


    var slider2 = new Swiper(".mySwiper2", {
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination2",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet ' + className + '"></span>';
            }
        },
        breakpoints: {}
    });

    let receptor1 = document.querySelector('.LeftBottomItemTop1');
    let blockTop1 = document.querySelector('.LeftBottomItemBottom1');
    let receptor2 = document.querySelector('.LeftBottomItemTop2');
    let blockTop2 = document.querySelector('.LeftBottomItemBottom2');
    let receptor3 = document.querySelector('.LeftBottomItemTop3');
    let blockTop3 = document.querySelector('.LeftBottomItemBottom3');
    let receptor4 = document.querySelector('.LeftBottomItemTop4');
    let blockTop4 = document.querySelector('.LeftBottomItemBottom4');
    let receptor5 = document.querySelector('.LeftBottomItemTop5');
    let blockTop5 = document.querySelector('.LeftBottomItemBottom5');
    let receptor6 = document.querySelector('.LeftBottomItemTop6');
    let blockTop6 = document.querySelector('.LeftBottomItemBottom6');
    let receptor7 = document.querySelector('.LeftBottomItemTop7');
    let blockTop7 = document.querySelector('.LeftBottomItemBottom7');
    let receptor8 = document.querySelector('.LeftBottomItemTop8');
    let blockTop8 = document.querySelector('.LeftBottomItemBottom8');

    receptor1.addEventListener("click", () => {
        blockTop1.classList.toggle('other');
    })

    receptor2.addEventListener("click", () => {
        blockTop2.classList.toggle('other');
    })

    receptor3.addEventListener("click", () => {
        blockTop3.classList.toggle('other');
    })

    receptor4.addEventListener("click", () => {
        blockTop4.classList.toggle('other');
    })

    receptor5.addEventListener("click", () => {
        blockTop5.classList.toggle('other');
    })

    receptor6.addEventListener("click", () => {
        blockTop6.classList.toggle('other');
    })

    receptor7.addEventListener("click", () => {
        blockTop7.classList.toggle('other');
    })

    receptor8.addEventListener("click", () => {
        blockTop8.classList.toggle('other');
    })

})


let btonFlotante = document.querySelector('.bloqueFloat');
let btonFlotante2 = document.querySelector('.bloqueFloat2');


window.addEventListener('scroll', (e) => {

    // console.log(window.scrollY) 
    if( screen.width >= 319 ) {
        if( window.scrollY > 150 ) {
            btonFlotante.classList.add('bloqueFloatActive');
        }else {
            btonFlotante.classList.remove('bloqueFloatActive');
        }
    }
    if( screen.width >= 320 ) { 
        if( window.scrollY > 1199 && window.scrollY < 4050 ) {
            btonFlotante.classList.add('bloqueFloatActive2');
        }else {
            btonFlotante.classList.remove('bloqueFloatActive2');
        }
    }
    if( screen.width >= 390 ) {
        if( window.scrollY > 1199 && window.scrollY < 4150 ) {
            btonFlotante.classList.add('bloqueFloatActive2');
        }else {
            btonFlotante.classList.remove('bloqueFloatActive2');
        }
    }
    if( screen.width >= 1019 ) {
        if( window.scrollY > 550 && window.scrollY < 3900 ) {
            btonFlotante2.classList.add('bloqueFloatActive2');
        }else {
            btonFlotante2.classList.remove('bloqueFloatActive2');
        }
    }
    if( screen.width >= 1019 ) {
        if( window.scrollY > 550 && window.scrollY < 4150 ) {
            btonFlotante2.classList.add('bloqueFloatActive2');
        }else {
            btonFlotante2.classList.remove('bloqueFloatActive2');
        }
    }
})
 



