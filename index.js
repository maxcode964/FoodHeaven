const faders = document.querySelectorAll('.fade-in');
const fromLeft = document.querySelectorAll('.from-left');
const fromRight = document.querySelectorAll('.from-right');
const fromTop = document.querySelectorAll('#design4');
const fromTop1 = document.querySelectorAll('#design5');
const fromLeft1 = document.querySelectorAll('#design3');
const fadeOptions = {};

const fadeOnScroll = new IntersectionObserver(function (entries, fadeOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add("appear");
            fadeOnScroll.unobserve(entry.target);
        }

    })
}, fadeOptions);

faders.forEach(fader => {
    fadeOnScroll.observe(fader);
});

fromLeft.forEach(el => {
    fadeOnScroll.observe(el);
})

fromRight.forEach(el => {
    fadeOnScroll.observe(el);
})

fromTop.forEach(el => {
    fadeOnScroll.observe(el);
})

fromTop1.forEach(el => {
    fadeOnScroll.observe(el);
})

fromLeft1.forEach(el => {
    fadeOnScroll.observe(el);
})