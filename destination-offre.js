const menuHamburger = document.querySelector(".menu-hamburger")
    const navLinks = document.querySelector("#Menu")

    menuHamburger.addEventListener('click',()=>{ 
    navLinks.classList.toggle('mobile-menu')
    })

const offerTitle = document.getElementById('offer-title');
const offerMenu = document.getElementById('offer-menu');

offerTitle.addEventListener('click', ()=>{
    offerMenu.classList.toggle('hidden');
});