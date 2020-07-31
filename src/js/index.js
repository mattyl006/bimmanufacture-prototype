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

        bim_title1: `BIM - photo/animation`,
        bim_title2: `Modeling & Design BIM`,
        bim_title3: `We offer optimal design process in BIM technology`,

        bim_p1: `We design and model energy-efficient buildings using BIM technology. We coordinate multi-disciplinary models: architectural, structural, MEP installation - sanitary, HVAC, fire protection and electrical.`,
        bim_p2: `BIM Manufacture uses modern software during designing and modeling process in BIM technology.`,
        bim_p3: `We use Revit for designing and modeling objects. The software is based on an integrated actual database updated by the professionals. This working process allows to reduce design errors. Revit platform gives a possibility to exchange information between multi-disciplinary teams and lets us provide high quality design of the building.`,
        bim_p4: `The building and its elements are precisely matched - "made ​​to measure".`,
        bim_p5: `BIM models are updated immediately when changes appear. For example when changing the wall thickness on plan it changes everywhere in the model - in sections, plans , 3D views and schedules.`,
        bim_p6: `We produce accurate models of BIM objects of public buildings, sacred buildings, residential and others.`,
        bim_p7: `Do you have any questions you want to ask about the details? Do you need any additional product that is not listed above?`,
        bim_p8: `Contact us -`,

        bim_dt1: `We create BIM models for each stage of the design (from conception, construction design, through tender design, detailed design until the as-built projects):`,
        bim_dt2: `Mechanical installation, building services;`,
        bim_dt3: `Electrical and automation;`,
        bim_dt4: `Additionally we offer;`,

        bim_item1: `Architectural,`,
        bim_item2: `Structural,`,
        bim_item3: `MEP - Sanitary, HVAC,`,
        bim_item4: `MEP - Electrical,`,
        bim_item5: `Mechanical ventilation,`,
        bim_item6: `Heating,`,
        bim_item7: `Cooling,`,
        bim_item8: `Water supply and sewerage,`,
        bim_item9: `Fire protection using smoke exhaust and sprinklers,`,
        bim_item10: `Natural gas,`,
        bim_item11: `Central vacuum cleaner,`,
        bim_item12: `Rainwater recovery,`,
        bim_item13: `Heating and cooling recovery,`,
        bim_item14: `Solar water heater installations,`,
        bim_item15: `Switchgear distribution,`,
        bim_item16: `Lighting fixtures and cable trays,`,
        bim_item17: `Automatic HVAC and smoke garages,`,
        bim_item18: `Fire alarm system,`,
        bim_item19: `Security systems (sound and visual systems),`,
        bim_item20: `Access control,`,
        bim_item21: `Photovoltaic installations (PV),`,
        bim_item22: ``,
        bim_item23: `Energy performance certificates and analysis,`,
        bim_item24: `Calculations and regulation of heating, cooling and hot water circulation installations,`,
        bim_item25: `Multi-disciplinary BIM coordination,`,
        bim_item26: `Report of clashes detected in multi-discipline BIM model,`,
        bim_item27: `Creation of gbXML files for importing to IES, HAP,`,
        bim_item28: `Creation of IFC models for mobile use (Tekla BIMsight),`,
        bim_item29: `Analysis of installed power and the true demand for heating and cooling in building`,
        bim_item30: `BIM-based soil analysis movement,`,
        bim_item31: ``,

        contact_title: `Contact`,
        contact_address: `address: ul. Husarska 8/3`,
        contact_city: `postcode: 60-331 Poznań`,
        contact_country: `country: Poland`,

        projects_title: `Realisation n - animation/photo`,
        projects_p: `Projects describe / grid of photos.`,

        scanning_title1: `Scanning - animation/photo`,
        scanning_title2: `We already scanned...`,
        scanning_title3: `Laser scanning`,
        scanning_0: `0`,
        scanning_p: `0`,
        scanning_span1: `Over`,
        scanning_span2: `Investition`,
        scanning_span3: `Countries`,
        scanning_p: `Laser scanning is the controlled deflection of laser beams, visible or invisible. Scanned laser beams are used in some 3-D printers, in rapid prototyping, in machines for material processing, in laser engraving machines, in ophthalmological laser systems for the treatment of presbyopia, in confocal microscopy, in laser printers, in laser shows, in Laser TV, and in barcode scanners.`,

        revolution_title1: `BIM revolution`,
        revolution_title2: `Technology revolution`,
        revolution_title3: `Mental revolution`,
        revolution_dt: `The possibility to take into account the increasing number of parameters to optimize the design is ahead:`,
        revolution_item1: `3D – geometry relationship,`,
        revolution_item2: `4D – time- or schedule-related information,`,
        revolution_item3: `5D – cost-related information,`,
        revolution_item4: `6D – project life-cycle management information,`,
        revolution_item5: `and we can enumerate here nD ...`,
        revolution_p1: `July 20, 1969 memorializes the spectacular landing of the first humans on the Moon. When Neil Armstrong descended the ladder and set foot in the dusty surface, he spoke the words that passed into history: “That’s one small step for a man, one giant leap for mankind.”`,
        revolution_p2: `Revolutions in the process of designing and construction which commenced a few years ago can be compared not only to taking a step or jump but also to using a space-shift portal into another space-time dimension.`,
        revolution_p3: `Progress and development have been with humankind since forever from the very beginning of humanity evolution. People have been continuously optimizing their work and tasks, completing them faster and with less effort.`,
        revolution_p4: `We experience the technological development on every step, from the invention of the wheel, light bulbs, through the development of computerization, mobile, and automotive.`,
        revolution_p5: `The increase of computing power and the reduction of these devices size have already enabled us to go beyond 2D design.`,
        revolution_p6: `In fact, over time we consider in the design more variables optimizing in making decisions using faster computers and more advanced software. Man can optimize and filter data only to a certain limit.`,
        revolution_p7: `Supposing, the computer is properly operated and programmed; it is able to assist us in making fast-paced and better decisions, in accordance with the sentence: “Harder, Better, Faster, Stronger” Time is money, optimized information is power.`,
        revolution_p8: `In a few years in the design, we will know what is the actual or estimated for the next few months price (using financial markets) of any component.`,
        revolution_p9: `We will be also able to check the availability of this item during the planned construction. This is all to optimize and look for the best solution, taking into account many factors.`,
        revolution_p10: `In the past, people could not imagine the design of a complicated object without a drawing board and a tracing paper. Today we cannot think of a factory design on a paper but as a minimum in 2D or 3D design.`,
        revolution_p11: `In the near future there will be no one considering working in a different way than BIM.`,
        revolution_p12: `In 1992, G.A. van Nederveen and F.P. Tolman pictured BIM as “Modelling Multiple Views on Building” and it appeared that their estimates became real. Today we are already working in BIM in many offices. BIM is the process of building information modeling; however, it turns out that BIM is something more than a “building” information modeling. This is also the relationship with the environment (for instance, in civil engineering). And it really boils down to IM – information modeling.`,
        revolution_p13: `Today we use the advanced tools, like the laser scanners or the augmented reality glasses. We use the mouse clicking by two fingers which often causes wrist pain. Just imagine being a designer as a pianist who designs in the air using two hands, 10 fingers... In fact, there are no restrictions, there are only challenges.`,
        revolution_p14: `Over the last years we heard about technical novelties, most incredible devices and what happens at presence is merely the beginning.
        What the next years will bring? It is hard to predict but we have an interesting way with adventures ahead.`,
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
        rozwiązania i miłą obsługę.`,

        bim_title1: `BIM - zdjęcie/animacja`,
        bim_title2: `Modelowanie i Projektowanie BIM`,
        bim_title3: `Oferujemy optymalne projektowanie w technologii BIM`,

        bim_p1: `Projektujemy i modelujemy energooszczędne obiekty przy
        wykorzystaniu technologii BIM. Oferujemy skoordynowane
        wielobranżowe modele architektoniczne, konstrukcyjne,
        instalacyjne - sanitarne, ppoż i elektryczne.`,
        bim_p2: `W BIM Manufacture korzystamy z nowoczesnego
        oprogramowania do projektowania i modelowania zgodnie z
        technologią BIM.`,
        bim_p3: `Wykorzystujemy oprogramowanie Revit do projektowania i
        modelowania obiektów. Oprogramowanie to jest oparte na
        zintegrowanej bazie danych zawierającej aktualne dane
        wprowadzone przez projektantów co pozwala na redukowanie
        błędów projektowych. Jest to platforma wymiany
        informacji międzybranżowej, która pozwala na generowanie
        najlepszej jakości projektu budynku.`,
        bim_p4: ` Budynek i jego elementy są dokładnie dopasowane - "szyte
        na miarę".`,
        bim_p5: `Model BIM podczas zmian jest aktualizowany natychmiast.
        Zmieniając np. na rzucie grubość ściany jej grubość
        zmienia się wszędzie w pozostałych przekrojach, rzutach,
        widokach 3D lub zestawieniach.`,
        bim_p6: `Wykonujemy dokładne modele BIM obiektów m.in. budynków
        użyteczności publicznej, sakralnych, mieszkaniowych i
        innych.`,
        bim_p7: `Masz pytania, chcesz zapytać o szczegóły, potrzebujesz
        dodatkowego produktu który nie jest ujęty powyżej?`,
        bim_p8: `Skontaktuj się z nami -`,

        bim_dt1: `Opracowujemy dokładne modele wielobranżowe BIM dla
        każdego etapu projektowania (od koncepcji, projektu
        budowlanego, projektu przetargowego, projektu
        wykonawczego aż do projektu powykonawczego):`,
        bim_dt2: `instalacji sanitarnych;`,
        bim_dt3: `instalacji elektrycznej i automatyki;`,
        bim_dt4: `dodatkowo oferujemy;`,

        bim_item1: `architektoniczne,`,
        bim_item2: `konstrukcyjne,`,
        bim_item3: `instalacyjne - sanitarne,`,
        bim_item4: `instalacyjne - elektryczne,`,
        bim_item5: `wentylacji bytowej,`,
        bim_item6: `ogrzewania,`,
        bim_item7: `chłodzenia,`,
        bim_item8: `wod-kan,`,
        bim_item9: `ppoż wraz z oddymianiem,`,
        bim_item10: `gazu,`,
        bim_item11: `odkurzania centralnego,`,
        bim_item12: `odzysku wody opadowej,`,
        bim_item13: `odzysku energii cieplnej i chłodniczej,`,
        bim_item14: `instalacje solarne,`,
        bim_item15: `rozdzielnice dystrybucyjne,`,
        bim_item16: `oświetlenie i koryta kablowe,`,
        bim_item17: `automatyka HVAC i oddymiania garaży,`,
        bim_item18: `system sygnalizacji pożaru,`,
        bim_item19: `DSO (Dźwiękowych Systemów Ostrzegawczych),`,
        bim_item20: `kontrola dostępu,`,
        bim_item21: `okablowanie strukturalne,`,
        bim_item22: `instalacje fotowoltaiczne,`,
        bim_item23: `świadectwa charakterystyki energetycznej i
        certyfikaty energetyczne,`,
        bim_item24: `obliczenia i regulacje instalacji c.o., c.w.u,`,
        bim_item25: `koordynacje międzybranżową 3D,`,
        bim_item26: `wykrywanie kolizji w formie raportu na podstawie
        modelu wielobranżowego BIM,`,
        bim_item27: `sprawdzanie projektów pod względem technicznym,`,
        bim_item28: `wykonanie modeli gbxml dla potrzeb IES, HAP,`,
        bim_item29: `wykonanie modeli IFC do mobilnego użytkowania modeli
        3D,`,
        bim_item30: `analizy mocy zainstalowanej oraz zapotrzebowania na
        ciepło i chłód dla budynków,`,
        bim_item31: `analiza mas ziemnych w oparciu o model BIM,`,

        contact_title: `Kontakt`,
        contact_address: `adres: ul. Husarska 8/3`,
        contact_city: `kod pocztowy: 60-331 Poznań`,
        contact_country: `kraj: Polska`,

        projects_title: `Realizacja n - animacja/zdjęcie`,
        projects_p: `Opis zrealizowanego projektu / siatka zdjęć.`,

        scanning_title1: `Skanowanie - animacja/zdjęcie`,
        scanning_title2: `Do tej pory zeskanowaliśmy...`,
        scanning_title3: `Skanowanie laserowe`,
        scanning_0: `0`,
        scanning_p: `0`,
        scanning_span1: `Ponad`,
        scanning_span2: `inwestycje`,
        scanning_span3: `kraje`,
        scanning_p: `Technologia pozyskiwania informacji o kształcie obiektu. Jego ideę można sprowadzić do zasady laserowego pomiaru odległości z punktu o określonych współrzędnych przestrzennych do badanych punktów i wyznaczeniu ich położenia w przyjętym układzie przestrzennych współrzędnych biegunowych. Ze względu na odpowiednio dużą liczbę punktów pomiarowych, dla których stosowane jest określenie "chmura punktów", uzyskuje się quasi-ciągłą, przestrzenną reprezentację powierzchni badanego obiektu.`,

        revolution_title1: `BIM rewolucja`,
        revolution_title2: `Rewolucja technologiczna`,
        revolution_title3: `Rewolucja mentalna`,
        revolution_dt: `Przed nami możliwości uwzględniania coraz większej ilości parametrów optymalizujących projekt:`,
        revolution_item1: `3D – zależności geometrycznych,`,
        revolution_item2: `4D – czasu powiązanego z harmonogramem,`,
        revolution_item3: `5D – ceny np. koszt materiałów,`,
        revolution_item4: `6D – analizy cyklu życia budynków,`,
        revolution_item5: `i można tutaj napisać nD...`,
        revolution_p1: `20 lipca 1969 roku nastąpiło lądowanie na księżycu i kiedy Amstrong zszedł po drabince i postawił stopę na pokrytej pyłem powierzchni wypowiedział słowa, które przeszły do historii: „To jest mały krok człowieka ale wielki skok dla ludzkości.”`,
        revolution_p2: `Rewolucje w procesie budowlanym, która rozpoczęła się kilka lat temu można porównać nie tylko do wykonania kroku czy skoku tylko do korzystania z portalu czasoprzestrzeni - przeniesienia się w inny wymiar.`,
        revolution_p3: `Postęp i rozwój towarzyszy człowiekowi od zawsze od samego
        początku ewolucji ludzkości. Ludzie od zawsze próbują
        optymalizować swoją prace i zadania by móc je wykonać
        szybciej z mniejszym wysiłkiem.`,
        revolution_p4: `Rozwoju technologicznego doświadczamy na każdym kroku od
        wynalezienia koła, żarówki, poprzez rozwój komputeryzacji,
        telefonii komórkowej czy motoryzacji.`,
        revolution_p5: `Zwiększenie mocy obliczeniowej komputerów przy zmniejszaniu
        wielkości tych urządzeń pozwala nam już dziś na wyjście poza
        granice projektów 2D.`,
        revolution_p6: `Tak naprawdę z biegiem czasu w projektowaniu uwzględniamy
        jeszcze więcej zmiennych optymalizujących podejmowane
        decyzje w oparciu o szybsze komputery i oprogramowanie.
        Człowiek może optymalizować i filtrować dane tylko do pewnej
        granicy.`,
        revolution_p7: `Odpowiednio obsługiwany i zaprogramowany komputer jest w
        stanie wspierać nas w szybkim podejmowaniu trafniejszych
        decyzji w myśl sentencji: “Ciężej, Lepiej, Szybciej,
        Silniej” Czas to pieniądz. Zoptymalizowana informacja to
        potęga.`,
        revolution_p8: `Za kilka lat podczas projektowania będziemy wiedzieć jaka
        jest aktualna cena produktu w danej chwili albo prognozowana
        na najbliższe miesiące (w oparciu np. o analizy giełdowe).`,
        revolution_p9: `Zobaczymy też jak wygląda sprawa dostępności tego elementu
        podczas planowanej budowy. Wszystko po to by optymalizować i
        szukać najlepszego rozwiązania z uwzględnieniem wielu
        czynników.`,
        revolution_p10: `Kiedyś nie wyobrażano sobie zaprojektowania skomplikowanego
        obiektu bez użycia deski kreślarskiej i kalki. Dzisiaj nie
        wyobrażamy sobie projektowania fabryki na papierze tylko
        przy użyciu co najmniej oprogramowania 2D lub 3D.`,
        revolution_p11: `W najbliższym czasie nikt nie będzie sobie wyobrażał pracy
        innej jak przy wykorzystaniu technologii BIM.`,
        revolution_p12: `W 1992 roku G.A. van Nederveen i F.P. Tolman zobrazowali BIM
        jako “Modelowanie wielu widoków budynku” i okazało się, że
        ich założenia stały się rzeczywistością i dzisiaj w wielu
        biurach pracujemy już w technologii BIM. BIM oznacza proces
        modelowania informacji o budynku - okazuje się jednak ze
        wychodzimy z BIM poza budynek projektując jego zależności z
        otoczeniem (drogi, sieci). Całość sprowadza się to tak
        naprawdę do IM (Information Modeling) - modelowania i
        kształtowania informacji.`,
        revolution_p13: `Dzisiaj korzystamy z zaawansowanych narzędzi, laserowych
        skanerów, okularów do rozszerzonej rzeczywistości.
        Korzystamy też z myszki klikając dwoma palcami i poruszając
        obolałym często nadgarstkiem. A wyobraźmy sobie projektanta
        – pianistę, który modeluje budynek w powietrzu przy użyciu
        dwóch rak, 10-ciu palców... Tak naprawdę nie ma ograniczeń
        są jedynie wyzwania.`,
        revolution_p14: `Przez ostatnie lata słyszymy o nowinkach technicznych,
        niesamowitych urządzeniach, a to co się dzieje to dopiero
        początek.Co będzie za kilka lat? Trudno powiedzieć, ale
        przed nami ciekawa droga pełna przygód.`,
    }
}



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

const multiLanguage = () => {
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
        const noeng = document.querySelectorAll('.planning__item--noeng');
        for(let i of noeng) {
            i.style.display = `block`;
        }
        counterAnimation();
    })

    buttonENG.addEventListener('click', () => {
        for (let i of content) {
            i.classList.add('english');
        }
        let english = document.querySelectorAll('.english');
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
        const noeng = document.querySelectorAll('.planning__item--noeng');
        for(let i of noeng) {
            i.style.display = `none`;
        }
        counterAnimation();
    })
}

const index = () => {
    multiLanguage();
    navSlide();
    counterAnimation();
}

index();