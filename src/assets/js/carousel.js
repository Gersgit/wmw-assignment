var flkty;
var elem = document.querySelector('.carousel');
var carouselMobile = {
        cellAlign: "center",
        groupCells: 1,
        contain: true,
        freeScroll: false,
};

var carouselOptions = {
        cellAlign: "center",
        groupCells: 3,
        contain: true,
        freeScroll: false,        
        arrowShape: {
          x0: 10,
          x1: 60, y1: 50,
          x2: 60, y2: 40,
          x3: 20
        }
};

function carouselSize() {
  if (document.body.offsetWidth < "400") {
    flkty = new Flickity( elem, carouselMobile);
  } else {
    flkty = new Flickity( elem, carouselOptions);
  }
}

carouselSize();
window.onresize = carouselSize;



//prevent carousel link from firing if add to cart span button is clicked
var courselCellLink = document.querySelectorAll('.carousel-cell a');
courselCellLink.forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (e.target.tagName === "SPAN") {
        e.preventDefault();
      }
    });
});
