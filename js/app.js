// Text transition
function scrollAppear(){
  var text = document.querySelector(".text");
  var introPosition = text.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;

  if(introPosition < screenPosition) {
    text.classList ='appear';
  }
}

window.addEventListener('scroll', scrollAppear);



// circular image
(function scaleImage(){
  const element = document.querySelector('.circular-reveal');
  const inner = document.querySelector('.circular-reveal-content');

  const easing = 0.1;
  const outScale = 0.6;
  const inScale = 1;
  let targetScale = outScale;
  let elementScale = targetScale;
  let innerScale = 1 / elementScale;
  element.addEventListener("pointerover", () => {
    targetScale = inScale;
    });

  element.addEventListener("pointerout", () => {
    targetScale = outScale;
  });

  const update = ()  => {
    elementScale +=  (targetScale - elementScale) * easing;
    innerScale =  1/elementScale;
    element.style.transform = `scale(${elementScale})`;
    inner.style.transform = `scale(${innerScale})`;
  requestAnimationFrame(update);
};

requestAnimationFrame(update);
})();
