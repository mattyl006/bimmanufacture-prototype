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
        bim: `BIM`,

        p1_about: `BIM Manufacture is a team fascinated BIM technology.
        Each team member has many years of experience in BIM modeling using of programs like Revit. Our group uses modern tools and technologies.`,
        p2_about: `The company was created in November 2009 as Sajmon Projekt - Biuro Projektowe offers designing energy-efficient building services using 3D technology. In December 2013 due to dynamic development, broadening offered services and market area company name's was changed to BIM Manufacture.`,
        dt_about: `Our team members has attended courses, get certificates of knowledge and ability to work in BIM modeling programs:`,
        p3_about: `Everyone in the group has experience working with a variety types of projects.
        We have designed small and large objects - from single-family houses through the office and retail, to demanding industrial plants.
        We are not afraid of challenges.`,
        p4_about: `ECO BIM Manufacture - We operate pro-economically and pro-environmentally with a modern design process!
        We know how to design and model the buildings to make them more cost-effective, energy-efficient and environmentally friendly.
        In our group we have professionals who provide certification process finding the best solutions for low-energy and net-zero buildings. We use renewable energy systems in our projects.`,
        p5_about: `Feel invited to cooperate with us. We guarantee expert advice, innovative technology, optimal solutions and friendly service.`,

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
        bim: `BIM`,

        p1_about: `BIM Manufacture to zespół ludzi zafascynowanych technologią
        BIM, to grupa korzystająca z nowoczesnych narzędzi i
        technologii. Każdy członek zespołu posiada wieloletnie
        doświadczenie w pracy przy wykorzystywaniu programów do
        modelowania BIM m.in. Revit.`,
        p2_about: `Firma powstała w listopadzie 2009 roku jako Sajmon Projekt - Biuro Projektowe oferująca projektowanie instalacji energooszczędnych w budynkach przy wykorzystaniu technologii 3D. Od grudnia 2013 roku ze względu na dynamiczny rozwój, poszerzenie zakresu i obszaru oferowanych usług zmieniła nazwę na BIM Manufacture.`,
        dt_about: `Nasi pracownicy posiadają certyfikaty potwierdzające wiedzę
        i umiejętności pracy w programach do modelowania BIM;`,
        p3_about: `Projektowaliśmy duże i małe obiekty - od domków
        jednorodzinnych poprzez obiekty biurowe i handlowe, aż po
        wymagające zakłady przemysłowe. Nie boimy się wyzwań.`,
        p4_about: `ECO BIM Manufacture - działamy ekonomicznie i pro
        ekologicznie z nowoczesnym procesem projektowania! Wiemy jak
        projektować i modelować budynki aby były bardziej
        ekonomiczne, energooszczędne i ekologiczne. W naszej grupie
        mamy specjalistów od certyfikacji energetycznych i
        najlepszych rozwiązań dla budynków niskoenergetycznch, z
        zakresu energii odnawialnej.`,
        p5_about: `Zapraszamy zainteresowanych do współpracy, gwarantujemy
        fachowe doradztwo, nowoczesną technologię, optymalne
        rozwiązania i miłą obsługę.`
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