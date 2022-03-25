const navImg = document.querySelectorAll('nav img');
const navLinks = document.querySelectorAll('nav a');
const homeContent = document.querySelector('.home-content h1');
const homeLine = document.querySelector('.middle-line');
const homeImg = document.querySelector('.home-content img');
const homeBtn = document.querySelector('.home-content button');

window.addEventListener('load', anim);

function anim() {
    const time = gsap.timeline();

    time 
    .from(homeContent, {autoAlpha: 0, delay: 0.2, y: -50})
    .to(homeLine, {height: 100}, '-=0.2')
    .from(homeImg, {autoAlpha: 0, y: -50}, '-=0.2')
    .from(homeBtn, {autoAlpha: 0, y:-50}, '-=0.2')
    .from(navLinks, {autoAlpha: 0, stagger: 0.1, y: -50}, '-=0.2')
    .from(navImg, {autoAlpha: 0, stagger: 0.1, y: -50}, '-=0.2')
}