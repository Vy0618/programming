'use strict'

const switcher = document.querySelector("button");


/* Quando o botão for clicado, as instruções dentro das chaves ser
ao executadas.*/
switcher.addEventListener('click',function() {

    document.body.classList.toggle('dark-theme')
    document.body.classList.toggle('light-theme')
    

/* Checa uma classe associada ao botão. Se ele está com o "light-mode" ativado, o texto contiduo muda para "dark". Caso contrário, muda o texto para "light".*/
    var className = document.body.className;
    if (className == "light-theme"){
        this.textContent = "Dark"
    }
    else {
        /* this.textContent é o botão.*/
        this.textContent = "Light";

    }

    console.log('current class name: ' + className)
})


/* slideIndex quer dizer qual slide está sendo mostrado.*/
let slideIndex = 1;
showSlides(slideIndex);

/* Realiza operações matemáticas para mudar os slides. Ao adicionar ou subtrair ao número, o slide pula para a imagem correspondente.*/
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Muda para um slide qualquer.
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//mostra o slide N.
function showSlides(n) {
  let i;
  //abrange os elementos nas classes "mySlides" e "dot"
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  //Ao voltar para trás do primeiro slide, pula para o último; ao passar do último slide, volta para o primeiro.
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  //esoncde os slides.
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //remove a classe "active" de um pontinho, influenciando sua cor.
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //o block faz os pontinhos aparecerem. o "active" aplica as características da classe ao pontinho.
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//O "block" faz um elemento invisível visível.
