const artuno = document.getElementById("artuno");
const artdos = document.getElementById("artdos");
const artfinal = document.getElementById("artfinal");

// Creamos unha nova instancia de IntersectionObserver
const observer = new IntersectionObserver(function(entries) {
// Recorremos cada entrada na lista
for (const entry of entries) {
    // Se o elemento está a vista do usuario...
    if (entry.isIntersecting) {
    // Activamos a animación no elemento
    entry.target.classList.add('animate');
    }
}
});

// Seleccionamos o elemento ao que queremos aplicar a animación
const element1 = document.querySelector('.artuno')
const element2 = document.querySelector('.artdos')
const element3 = document.querySelector('.artres')
const element4 = document.querySelector('.artcuatro')
// Comenzamos a observar o elemento para cando entre na vista do usuario

observer.observe(element1);
observer.observe(element2);
observer.observe(element3);
observer.observe(element4);





