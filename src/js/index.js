import '../scss/main.scss';

console.log('HELLO 🚀')

const languagePack = {
    eng: {
        nav_oferts: `OFERTS`,
        nav_scanning: `Laser scanning`,
        nav_realisation: `REALISATIONS`,
        nav_project1: `Project I`,
        nav_project2: `Project II`,
        nav_project3: `Project III`,
        nav_project4: `Project IV`,
        nav_project5: `Project V`,
        nav_project6: `Project VI`,
        nav_information: `INFORMATION`,
        nav_about: `About us`,
        nav_revolution: `BIM Revolution`,
        nav_contact: `CONTACT`,
        homepage__title: `Title animation`,
        bim: `BIM`

    },
    pl: {
        nav_oferts: `OFERTA`,
        nav_scanning: `Skanowanie laserowe`,
        nav_realisation: `REALIZACJE`,
        nav_project1: `Projekt I`,
        nav_project2: `Projekt II`,
        nav_project3: `Projekt III`,
        nav_project4: `Projekt IV`,
        nav_project5: `Projekt V`,
        nav_project6: `Projekt VI`,
        nav_information: `INFORMACJE`,
        nav_about: `O nas`,
        nav_revolution: `Rewolucja BIM`,
        nav_contact: `KONTAKT`,
        homepage__title: `Animacja tytułowa`,
        bim: `BIM`
    }
}

// multi language implementation
const content = document.querySelectorAll('.text--js');
console.log(content);
const buttonPL = document.querySelector('.site-header__pl--js');
const buttonENG = document.querySelector('.site-header__eng--js');

buttonPL.addEventListener('click', () => {
    for (let i of content) {
        i.classList.add('polish');
    }
    let polish = document.querySelectorAll('.polish');
    if (polish.length != 0) {
        for (let i of content) {
            i.innerHTML = languagePack.pl[i.id];
        }
    }
    else {
        for (let i of content) {
            i.innerHTML = languagePack.eng[i.id];
        }
    }
})

buttonENG.addEventListener('click', () => {
    for (let i of content) {
        i.classList.add('polish');
    }
    let english = document.querySelectorAll('.polish');
    if (english.length != 0) {
        for (let i of content) {
            i.innerHTML = languagePack.eng[i.id];
        }
    }
    else {
        for (let i of content) {
            i.innerHTML = languagePack.pl[i.id];
        }
    }
})

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