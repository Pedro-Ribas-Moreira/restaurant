
const btnForm = document.querySelector('#btnForm');
const bookingForm = document.querySelector("#bookingForm");
const closeDiv = document.querySelector("#closeDiv");
const opacityDiv = document.querySelector('.bgOpacity');

const showForm = ()=>{
    btnForm.addEventListener("click",()=>{
        bookingForm.classList.toggle("showDiv");
        opacityDiv.classList.toggle("showBg");
    })
}

showForm();

const hiddeForm = ()=>{
    closeDiv.addEventListener('click', ()=>{
        bookingForm.classList.toggle("showDiv");
        opacityDiv.classList.toggle("showBg");
    })
}

hiddeForm();
// Home Section
const hero = document.querySelector('.hero');
const logo = document.querySelector('.hero h2');
const welcome = document.querySelector('.hero h3');

const tl = new TimelineMax();

tl.fromTo(hero, 1 ,{height: '0px'}, {height: "350px", ease: Power2.ease})
.fromTo(welcome, 0.5, {opacity: '0'}, {opacity:'1', ease: Power2.ease})
.fromTo(logo, 1, {opacity: '0'}, {opacity:'1', ease: Power2.ease});


// About Section
const about = document.querySelector('.aboutText');
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');


const tl2 = new TimelineMax();

tl2.fromTo(about, 1, {x:-200}, {x:0, ease: Power2.ease})
.fromTo(img1, 1, {y:-100}, {y:0, ease: Power2.ease}, "-=1")
.fromTo(img2, 1, {x:100}, {x:0, ease:Power2.ease}, '-=1' )
.fromTo(img3, 1, {x:100}, {x:0, ease:Power2.ease}, '-=1')

const st = ScrollTrigger.create({
    trigger: '#about',
    start: '20% right', 
    animation: tl2 
});


// Chef Selection

const  img4 = document.querySelector('#img4');
const chefMenu = document.querySelector('.chefMenu')

const tl3 = new TimelineMax();

tl3.fromTo(img4, 1, {x: -500}, {x: 0, ease: Power2.ease})
.fromTo(chefMenu, 1, {opacity:0}, {opacity:1})

const st2 = ScrollTrigger.create({
    trigger: '#chefSelection',
    offset: 50,
    start: '20% right', 
    animation: tl3 
});

// Book

const bookText = document.querySelector('.bookDiv h1');
const bookButton = document.querySelector('.bookDiv button');
const bookParagraph = document.querySelector('#booking p');

const tl4 = new TimelineMax();

tl4.fromTo(bookText, 1, {x:-500}, {x:0, ease: Power2.ease})
.fromTo(bookButton, 1, {x:500}, {x:0, ease: Power2.ease},"-=1")
.fromTo(bookParagraph, 1, {opacity: 0}, {opacity: 1 , ease:Power2.ease});

const st3 = ScrollTrigger.create({
    trigger: '#booking',
    offset: 50,
    start: '20% right', 
    animation: tl4
});

// div
