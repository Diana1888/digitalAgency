const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('nav');
const btnStarter = document.querySelector('.btn-starter-nav');


toggleButton.addEventListener('click', function Open(){
    navbarLinks.classList.toggle('active');
    btnStarter.classList.toggle('active')
    console.log('hi')
})