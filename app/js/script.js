const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');
const linkItem = document.querySelectorAll('.header_linkItem');

btnHamburger.addEventListener('click', () => {
  
  if (header.classList.contains('open')) { // Close  Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElements.forEach((element) => {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    })
  } else { // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElements.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    })
    
  }
});

linkItem.forEach((item) => { // Link jump page functionality
  item.addEventListener('click', () => {
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElements.forEach((element) => {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  });
});