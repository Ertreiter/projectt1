// ham 
const ham = document.querySelector('.hamburger')
const nav = document.querySelector('nav')
ham.addEventListener('click', ()=>{
    nav.classList.toggle('active')
  })
  const items = document.querySelectorAll('.nav-item')

  items.forEach(item => item.addEventListener('click', ()=>{
    nav.classList.remove('active')
  }))

//back to top
const toTop = document.querySelector('.to-top')
window.addEventListener('scroll', ()=>{
  if(window.pageYOffset > 0){
    toTop.classList.add('active')
  }else{
    toTop.classList.remove('active')
  }
})

// darkmode
const darkModeButton = document.querySelector('.dark-mode-button')
darkModeButton.addEventListener('click', ()=>{
  document.body.classList.toggle('darkmode')
  if(darkModeButton.innerText === 'Darkmode'){
    darkModeButton.innerText = 'Lightmode'
  }else{
    darkModeButton.innerText = 'Darkmode'
  }
})

// carousel
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
// button previous
nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
// button next
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

