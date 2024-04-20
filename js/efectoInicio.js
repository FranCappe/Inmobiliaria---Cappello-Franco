window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var botonArriba = document.getElementById("boton-arriba");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botonArriba.style.display = "block";
  } else {
    botonArriba.style.display = "none";
  }
}

function irArriba() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


const imageWrappers = document.querySelectorAll('.image-wrapper');

function showImages() {
  imageWrappers.forEach((imageWrapper) => {
    if (isElementInViewport(imageWrapper)) {
      imageWrapper.classList.add('show');
    }
  });
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', showImages);
