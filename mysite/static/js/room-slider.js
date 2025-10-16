
const sliders = document.querySelectorAll('.room-slider');
sliders.forEach(slider => {
  new Swiper(slider, {
    loop: true,
    pagination: {
      el: slider.querySelector('.swiper-pagination'),
      clickable: true  
    },
    autoplay: {
      delay: 5000}
});
});