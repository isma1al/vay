const anchors = document.querySelectorAll('.menu__list-link');

anchors.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const blockId = link.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        });
    });
});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile__menu');

hamburger.addEventListener('click', () => {
    menu.classList.add('transform');
    console.log(menu);
});