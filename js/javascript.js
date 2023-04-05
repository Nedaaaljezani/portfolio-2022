$(document).ready(function () {
  $('.experiment-image-1').click(function () {
    $('.experiment-image-2').fadeToggle("slow");
    // Alternative animation for example
    // slideToggle("fast");
  });
});
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursoroutline = document.querySelector("[data-cursor-outline]");
window.addEventListener("mousemove", function(e){

  const posX = e.clientX;
  const posy = e.clientY;

  cursorDot.getElementsByClassName.left = `${posX}px`;

})