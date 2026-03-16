const menuHamburger = document.querySelector(".menu-hamburger")
    const navLinks = document.querySelector("#Menu")

    menuHamburger.addEventListener('click',()=>{ 
    navLinks.classList.toggle('mobile-menu')
    })

