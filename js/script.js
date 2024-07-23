// JavaScript (script.js)

// Variáveis para controlar o carrossel
let slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 1;

// Função para ir para o próximo slide
function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    updateSlide();
}

// Função para ir para o slide anterior
function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    updateSlide();
}

// Função para atualizar o slide atual
function updateSlide() {
    // Calcula o deslocamento necessário para mostrar o slide atual
    const offset = -currentSlide * 100 + '%';
    
    // Aplica o deslocamento ao container dos slides
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${offset})`;
    });
}

// Inicializa o carrossel
updateSlide();
