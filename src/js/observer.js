console.log("observer works");

const hero = document.querySelector('.hero--js');
const navigation = document.querySelector('.navigation--js')

const options = {
    rootMargin: '-200px',
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            navigation.classList.add('hide');
        }
        else {
            navigation.classList.remove('hide');
        }
    })
}, options);

observer.observe(hero);
