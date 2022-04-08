window.onload = (event) => {
  window.addEventListener("scroll", () => {
    const refs = [...document.querySelectorAll(`[class*="animate__"]`)];
    const currentScroll = window.pageYOffset;
    refs.forEach((ele) => {
      const eleOffset = ele.offsetTop;
      console.log({ eleOffset });
      if (currentScroll > eleOffset - screen.height / 2) {
        ele.classList.add("animate__fadeInUp");
        ele.classList.remove("animate__fadeOut");
      }
      //  else {
      //   ele.classList.remove("animate__fadeInUp");
      //   ele.classList.add("animate__fadeOut");
      // }
    });
  });
};
