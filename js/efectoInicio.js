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



