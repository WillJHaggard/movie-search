const smoothScroll = () => {
  var currentScroll =
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(smoothScroll);
    window.scrollTo(0, currentScroll - currentScroll / 5);
  }
};

export default smoothScroll;
