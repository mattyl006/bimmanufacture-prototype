import '../scss/main.scss';

console.log('HELLO 🚀')

// navigation mobile
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

// counter animation
const counterAnimation = () => {
    const counter = document.querySelectorAll('.counter__number--js');

    const areaSpeed = 300;
    const areaUpdate = 10;

    const businessSpeed = 500;
    const businessUpdate = 100;

    const countrySpeed = 1000;
    const countryUpdate = 1000;

    counter.forEach(c => {
        let speed = 1;
        let update = 1;
        if(c.getAttribute('data-target') == "250000") {
            speed = areaSpeed;
            update = areaUpdate;
        }
        else if(c.getAttribute('data-target') == "32") {
            speed = businessSpeed;
            update = businessUpdate;
        }
        else {
            speed = countrySpeed;
            update = countryUpdate;
        }
        
        const updateCount = () => {
            const target = +c.getAttribute('data-target');
            const count = +c.innerText;

            const inc = target / speed;

            if(count < target) {
                c.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, update);
            } else {
                c.innerText = target;
            }
        }

        updateCount();
    })

    document.querySelectorAll('.m2--js').innerText -= 200;
}

const index = () => {
    navSlide();
    counterAnimation();
}

index();