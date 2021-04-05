console.log("observer works");

const hero = document.querySelector('.hero--js');
const footer = document.querySelector('.footer--js');
const navigation = document.querySelector('.navigation--js');

const navObserverOptions = {
    rootMargin: '-100px',
};

const navObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            navigation.classList.add('hide');
        }
        else {
            navigation.classList.remove('hide');
        }
    })
}, navObserverOptions);

const footerObserverOptions = {
    rootMargin: '-100px',
};

const footerObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting) {
            footer.classList.add('hide');
        }
        else {
            footer.classList.remove('hide');
        }
    })
}, footerObserverOptions);

navObserver.observe(hero);

footerObserver.observe(hero);
