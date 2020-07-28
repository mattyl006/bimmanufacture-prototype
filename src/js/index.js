import '../scss/main.scss';

console.log('HELLO 🚀')

const navSlide = () => {
    const burger = document.querySelector('.site-header__hamburger--js');
    const nav = document.querySelector('.site-header__list--js');
    const links = document.querySelectorAll('.site-header__link--js')

    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav-activate');

        // Animate links
        links.forEach((link, index) => {
           if (link.style.animation) {
                link.style.animation = '';
           }
           else {
                link.style.animation = `linkAnimation 0.5s ease forwards ${index / 7 + 0.3}s`;
           }
        });

        // Burger animation
        burger.classList.toggle('toggle');
    });
}

const index = () => {
    navSlide();
}

index();