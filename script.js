
// script.js inside HTML
document.addEventListener('DOMContentLoaded', () => {
  const galleryImgs = document.querySelectorAll('.js-thumb');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbimg');

  galleryImgs.forEach(img=>{
    img.addEventListener('click', (e)=>{
      lbImg.src = e.currentTarget.dataset.large || e.currentTarget.src;
      lightbox.classList.add('show');
    })
  });

  lightbox.addEventListener('click', (e)=>{
    if(e.target === lightbox) lightbox.classList.remove('show');
  });

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') lightbox.classList.remove('show');
  });
});
// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lbimg = document.getElementById("lbimg");
const thumbs = document.querySelectorAll(".js-thumb");

thumbs.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lbimg.src = img.dataset.large;
  });
});

// Close lightbox on click anywhere
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
