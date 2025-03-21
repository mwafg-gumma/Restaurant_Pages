
const menuIcon = document.querySelector('.icon');
const navMenu = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});