'use Strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;


// Make bavbar transparent when it is on the top
// 스크롤이 될때마다 ()=>{} 실행
// document.addEventListener('scroll', ()=>{
//     if (window.scrollY > navbarHeight){
//         navbar.classList.add('navbar--dark');
//     }else{
//         navbar.classList.remove('navbar--dark');
//     }
// } )

document.addEventListener('scroll',()=>{
    if(window.scrollY>navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});


// handle navr item move
const navberMenu = document.querySelector('.navbar__menu');

navberMenu.addEventListener('click', ()=>{
const targetLink = event.target.dataset.link;
    if(targetLink == null){
        return;        
    }else{
        const scrollTo = document.querySelector(targetLink);
        scrollTo.scrollIntoView({behavior: 'smooth'});
    }
});

// Handle Contack me Button move
const conTackBt =  document.querySelector('.home__contact');

conTackBt.addEventListener('click',()=>{
const targetLink = event.target.dataset.link;
    if(targetLink==null){
        return;
    }else{
        const scrollTo = document.querySelector(targetLink);
        scrollTo.scrollIntoView({behavior:'smooth'});
    }
})