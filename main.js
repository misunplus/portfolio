'use Strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;


// Make bavbar transparent when it is on the top
// 스크롤이 될때마다 ()=>{} 실행
document.addEventListener('scroll', ()=>{
    if (window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
} )
