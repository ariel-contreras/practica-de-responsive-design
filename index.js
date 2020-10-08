/* function hideShow () { 
  menu.classList.add('is-active')
}; */
const menu = document.querySelector('.menu');

const burgerButton = document.querySelector('#burgerButton');

burgerButton.addEventListener('click',()=>{
  menu.classList.toggle('is-active')
})

