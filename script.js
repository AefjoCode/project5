const section = document.querySelector('section');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    section.classList.toggle('active');
});

const photo = document.querySelector('.boxImg img');
const images = document.querySelectorAll('.banner img');

images.forEach((img) => {
    img.addEventListener('click', () => {
        photo.setAttribute('src', img.getAttribute('src'));
    });
});