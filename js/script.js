// 
let burger = document.querySelector('.block-first__inner__burger-menu');
let Menu = document.querySelector(".block-first__menu");

let spanTop = document.querySelector('.block-first__inner__burger-menu__span--top');
    let spanMiddle = document.querySelector('.block-first__inner__burger-menu__span--middle');
    let spanBottom = document.querySelector('.block-first__inner__burger-menu__span--bottom');

function parallax(event){
    this.querySelectorAll(".parallax").forEach(parallax => {
        // let speed = parallax.getAttribute('data-speed');
        parallax.style.transform = `translate(${event.clientX/55}%)`
        
    });
}



function burgerMenu(){
    if(spanMiddle.classList.contains('block-first__inner__burger-menu--open__span--middle')){
        spanTop.classList.remove('block-first__inner__burger-menu--open__span--top');
        spanMiddle.classList.remove('block-first__inner__burger-menu--open__span--middle');
        spanBottom.classList.remove('block-first__inner__burger-menu--open__span--bottom');
        // document.querySelector('.block-header__container__logo').style.display = "block";
        Menu.style.left = -100 + "%";
    }else{
        spanTop.classList.add('block-first__inner__burger-menu--open__span--top');
        spanMiddle.classList.add('block-first__inner__burger-menu--open__span--middle');
        spanBottom.classList.add('block-first__inner__burger-menu--open__span--bottom');
        // document.querySelector('.block-header__container__logo').style.display = "none";
        Menu.style.left = 0;

    }
    
}


document.addEventListener('mousemove', parallax);
burger.addEventListener('click',burgerMenu);


 

