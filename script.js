// SCRIPT SCROLL SUAVE INÍCIO

function initScrollSuave() {
  const linkInterno = document.querySelectorAll('.js-link a[href^="#"]')
  if (linkInterno.length){
    function scrollToSection(event) {
      event.preventDefault();
      const href = this.getAttribute('href')
      const section = document.querySelector(href);
      const topo = section.offsetTop;
      window.scrollTo({
        top: topo,
        behavior: 'smooth'
      })
    }
  
    linkInterno.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    })
  }

}

initScrollSuave();

// SCRIPT SCROLL SUAVE FIM


// SCRIPT ANIMAÇÃO AO SCROLL INÍCIO

function initAnimaScroll() {
  const sectionGrid = document.querySelectorAll('.js-scroll')
  if(sectionGrid.length){
    const metadeTela = window.innerHeight * 0.6
    function animaScroll() {
      sectionGrid.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const metadeAtiva = sectionTop - metadeTela
      if (metadeAtiva < 0) {
        section.classList.add('ativo')
      }
      })
    }
    window.addEventListener('scroll', animaScroll);
}}

initAnimaScroll();