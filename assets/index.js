const MenuBtn = document.querySelector('.menu'),
navList = document.querySelector('.navLinks')


MenuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
    MenuBtn.classList.toggle('fab-times');
})