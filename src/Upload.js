export const switcher = () => {
  var carousel = document.querySelector(".carousel");
  var firstImage = carousel.querySelectorAll("img")[0];
  var arrowIcons = document.querySelectorAll(".wrapper i");

  let isGragStart = false,
    prevPageX,
    prevScrollLeft;
  let firstImageWidth = firstImage.clientWidth + 14;
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;


  const autoSlide = () =>{
    positiobDiff = Math.abs(positiobDiff);
    let firstImageWidth = firstImage.clientWidth + 14;
    let valDifference = firstImageWidth - positiobDiff;
     console.log(positiobDiff);
  }

  let showHideIcon = () => {
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display =
      carousel.scrollLeft == scrollWidth ? "none" : "block";
  };

  arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      carousel.scrollLeft +=
        icon.id == "left" ? -firstImageWidth : firstImageWidth;
      setTimeout(() => showHideIcon(), 05);
    });
  });

  var DragStart = (e) => {
    isGragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
  };

  var dragging = (e) => {
    if (!isGragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
     positiobDiff =(e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - possitiobDiff;
  };

  var dragStop = () => {
    isGragStart = false;
    carousel.classList.remove("dragging");
    autoSlide();
  };

  carousel.addEventListener("mousedown", DragStart);
  carousel.addEventListener("touchstart", DragStart);

  carousel.addEventListener("mousemove", dragging);
  carousel.addEventListener("touchmove", dragging);

  carousel.addEventListener("mouseup", dragStop);
  carousel.addEventListener("mouseleave", dragStop);
  carousel.addEventListener("touchend", dragStop);
};
