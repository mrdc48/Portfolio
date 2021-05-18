const menuBtn = document.querySelector('.hamburger_menu')
const navData = document.querySelector('.nav_links');

menuBtn.addEventListener('click', ()=>{
 navData.classList.toggle('show');
})