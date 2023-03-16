document.querySelector('#about').scrollIntoView({
    behavior: 'smooth'
});

document.querySelector('#home').scrollIntoView({
    behavior: 'smooth'
});

document.querySelector('#projects').scrollIntoView({
    behavior: 'smooth'
});

// window.addEventListener('scroll', function(){
//     const nav = document.querySelector('nav');
//     const scrolled = window.scrollY;

//     if (scrolled > nav.offsetHeight) {
//         nav.classList.add('fixed');
//     } else {
//         nav.classList.remove('fixed');
//     }
// });