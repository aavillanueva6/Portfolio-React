// When the user scrolls down from the top of the document, resize the navbar's padding and the logo's font size
window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', handleScroll);
});
function handleScroll() {
  const fadeIn = document.querySelectorAll('.customFadeIn');
  const fadeOut = document.querySelectorAll('.customFadeOut');
  if (fadeIn && fadeOut) {
    if (
      document.body.scrollTop > 65 ||
      document.documentElement.scrollTop > 65
    ) {
      for (const el of fadeIn) {
        el.classList.remove('invisible', 'fadeOutEffect');
        el.classList.add('fadeInEffect');
      }
      for (const el of fadeOut) {
        el.classList.add('invisible', 'fadeOutEffect');
        el.classList.remove('fadeInEffect');
      }
    } else {
      for (const el of fadeIn) {
        el.classList.add('invisible', 'fadeOutEffect');
        el.classList.remove('fadeInEffect');
      }
      for (const el of fadeOut) {
        el.classList.add('fadeInEffect');
        el.classList.remove('invisible', 'fadeOutEffect');
      }
    }
  }
}
