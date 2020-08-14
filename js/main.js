//HEADER
const language = document.querySelector('.language');
const preHeaderRight = document.querySelector('.pre-header');
const lan = document.querySelector('.lan');

language.addEventListener('mouseenter', () => {
	lan.classList.add('active');
})
preHeaderRight.addEventListener('mouseleave', () => {
	lan.classList.remove('active');
})



//HERO
const heroLeft = document.querySelector(".hero__left-department");
const showContent = document.querySelector('.hero__left-department-info');

heroLeft.addEventListener('click', () => {
	showContent.classList.toggle('active');
})