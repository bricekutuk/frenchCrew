const menuHamburger = document.querySelector(".menu-hamburger")
    const navLinks = document.querySelector("#Menu")

    menuHamburger.addEventListener('click',()=>{ 
    navLinks.classList.toggle('mobile-menu')
    })


 window.addEventListener('scroll', () => {
        const nav = document.getElementById('nav');
        if (window.scrollY > 10) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

