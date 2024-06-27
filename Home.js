const menuBtn = document.querySelector('.menu-btn')
const navLinks = document.querySelector('.nav-links')


menuBtn.addEventListener('click' , ()=>{
  navLinks.classList.toggle('mobile-menu')
})

document.querySelector('.link').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'flex'; 
});

document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
});