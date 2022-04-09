window.onload = () => {
  const refs = [...document.querySelectorAll(`[class*="animate__"]`)];
  const handleFade = (windowOffset) => {
    refs.forEach((ele) => {
      const eleOffset = ele.offsetTop;
      if (windowOffset > eleOffset - screen.height) {
        ele.classList.add('animate__fadeInUp');
        ele.classList.remove('animate__fadeOut');
      }
    });
  };
  const initWindow = window.pageYOffset;
  handleFade(initWindow);

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    handleFade(currentScroll);

    // header sticky
    const header = document.getElementById('header');
    currentScroll > 0
      ? header.classList.add('header-sticky')
      : header.classList.remove('header-sticky');
  });

  // img-token position
  const tokenImgs = document.querySelectorAll('.img-token');
  const handlePositionToken = () => {
    tokenImgs.forEach((img) => {
      const nextDiv = img.nextElementSibling;
      const thisHeight = img.height;

      img.style.top = -(thisHeight / 2) + 'px';
      nextDiv.style.paddingTop = thisHeight / 2 + 'px';
    });
  };
  handlePositionToken();

  window.addEventListener('resize', handlePositionToken);
};
