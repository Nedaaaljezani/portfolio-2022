$(document).ready(function () {
  $('.experiment-image-1').click(function () {
    $('.experiment-image-2').fadeToggle("slow");
    // Alternative animation for example
    // slideToggle("fast");
  });
});
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursoroutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {

      const posX = e.clientX;
      const posy = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posy}px`;
      //cursorOutline.style.left = `${posX}px`;
     // cursorOutline.style.top = `${posy}px`;

     cursoroutline.animat({
      left: `${posX}px`,
      top: `${posy}px`}, {duration:500, fill: "forwards"})
     })