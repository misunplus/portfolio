'use Strict';

//Navbar scroll navbar--dark
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

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
    console.log(targetLink);
    if(targetLink == null){
        return;        
    }else{
        scrollIntoview(targetLink);
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
        scrollIntoview(targetLink);
    }
});


//home scrooll transparent
const home = document.querySelector('#home');
const home__ct = document.querySelector('.home__ct');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
   home__ct.style.opacity = 1- window.scrollY/homeHeight;
});


//Arrow up handling
const arrowUp = document.querySelector('.arrow__up');
document.addEventListener('scroll', () =>{
    if(window.scrollY>homeHeight/2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
})

arrowUp.addEventListener('click', ()=>{
    const homeLink = ("#home");
    scrollIntoview(homeLink);
});


//Work filtering
const work__projects = document.querySelector('.work__projects');


const project = document.querySelectorAll('.project');


document.addEventListener('click', (event)=>{
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
    if (filter == null){
        return;
    }
    
    // let projects;
    // for(let i=0; i<project.length; ++i){
    //     projects = project[i];
    // } 
    work__projects.classList.add('ani-out');

    setTimeout(()=>{
    work__projects.classList.remove('ani-out');   
    }, 300);
    project.forEach((project)=>{
        if(filter === project.dataset.type || filter === "*"){
            project.classList.remove('invisible');
        } else{
            project.classList.add('invisible'); 
        }  
    });
});



//scrollIntoView smooth
function scrollIntoview(selecter){
    const scrollTo = document.querySelector(selecter);
    scrollTo.scrollIntoView({behavior: 'smooth'});
};