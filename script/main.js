// Código do slider de imagens //

var slides = document.querySelectorAll(".slide");
var currentSlide = 0;

// Chama a função nextSlide a cada 3 segundos
setInterval(nextSlide, 7000);

// Função para mudar a imagem atual
function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Função para mudar para a imagem anterior
function prevSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Adiciona event listener para botão prev
document.querySelector('.prev').addEventListener('click', prevSlide);
// Adiciona event listener para botão next
document.querySelector('.next').addEventListener('click', nextSlide);

// fim do código do slider de imagens //
