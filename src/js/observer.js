console.log("observer works");

const hero = document.querySelector('.hero--js');
const navigation = document.querySelector('.navigation--js')

const options = {
    rootMargin: '-120px',
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting) {
            navigation.classList.add('hide');
        }
        else {
            navigation.classList.remove('hide');
        }
    })
}, options);

observer.observe(hero);
