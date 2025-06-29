// Seleciona o botão de rolar para o topo
const scrollToTopBtn = document.querySelector('.scroll-to-top');

// Função para mostrar o botão de rolar para o topo
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
};

// Função para rolar para o topo ao clicar no botão
scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const observers = document.querySelectorAll('.scroll-fade');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Só anima uma vez
      }
    });
  }, { threshold: 0.1 });

  observers.forEach(el => observer.observe(el));

  // Quando a página carregar
window.addEventListener('load', function() {
  // Seleciona todos os links na barra de navegação
  const navLinks = document.querySelectorAll('header nav ul li a');

  // Itera sobre todos os links
  navLinks.forEach(function(link) {
    // Verifica se o href do link é igual à URL da página atual
    if (window.location.href.includes(link.href)) {
      link.classList.add('active'); // Adiciona a classe 'active' ao link correspondente
    }
  });
});

// Comportamento do header para todas as páginas
document.addEventListener('DOMContentLoaded', function() {
  const headers = document.querySelectorAll('body.home header, body.contactos header, body.areas header');
  let lastScroll = 0;

  // Verifica se existe pelo menos um header
  if (headers.length === 0) return;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    headers.forEach(header => {
      const headerHeight = header.offsetHeight;
      
      if (currentScroll > lastScroll && currentScroll > headerHeight) {
        header.classList.add('hide-header');
      } else if (currentScroll === 0) {
        header.classList.remove('hide-header');
      }
    });
    
    lastScroll = currentScroll;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  
  // Garante que o conteúdo do slide atual está visível
  function updateVisibleSlide() {
    slides.forEach(slide => {
      const rect = slide.getBoundingClientRect();
      const content = slide.querySelector('.slide-content');
      
      if (rect.left >= -50 && rect.left <= window.innerWidth) {
        content.style.opacity = '1';
      } else {
        content.style.opacity = '0';
      }
    });
  }
  
  // Atualiza a cada frame de animação
  function animationFrame() {
    updateVisibleSlide();
    requestAnimationFrame(animationFrame);
  }
  
  animationFrame();
});