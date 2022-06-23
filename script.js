
function initScrollSuave(){ 
  const menuSuave = document.querySelectorAll('.menu-js a[href^="#"]');
  if (menuSuave.length){ 
    function scrollToSection (event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      console.log(section);
      const topo = section.offsetTop;
      window.scrollTo({
        top: topo,
        behavior: 'smooth'
      })
    }


    menuSuave.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
}

initScrollSuave();


const todasImagens = document.querySelectorAll('img')
// console.log(todasImagens)

const linksInternos = document.querySelectorAll('a[href^="#"]');

const todosH2 = document.querySelectorAll('h2')

const ultimoP = document.querySelectorAll('p')
// console.log(ultimoP[ultimoP.length - 1])

const todasDiv = document.querySelectorAll('div');
todasDiv.forEach((p) => {
  // console.log(p)
});

const todosP = document.querySelectorAll('p')
todosP.forEach((p) => {
  // console.log(p.innerText)
})

const itensMenu = document.querySelectorAll('.header-menu a')
console.log(itensMenu)

itensMenu.forEach(itens => {
  itens.classList.add('.ativo')
  console.log(itens)
});


const rect = itensMenu[2].getBoundingClientRect();
console.log(rect)

console.log(window.innerWidth)
console.log(window.outerHeight)
console.log(window.pageYOffset)

if(window.innerWidth < 600){
  console.log('Pagina menor que 600px')
} else{
  console.log('Pagina maior que 600px')
}

const primeiraDiv = todasDiv[0].getBoundingClientRect()
console.log(primeiraDiv.top)

if(primeiraDiv.top < 0) {
  console.log('Passou')
} else {
  console.log('não passou')
}
