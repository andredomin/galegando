const artuno = document.getElementById("artuno");
const artdos = document.getElementById("artdos");
const artfinal = document.getElementById("artfinal");

// Creamos una nueva instancia de IntersectionObserver
const observer = new IntersectionObserver(function(entries) {
// Recorremos cada entrada en la lista
for (const entry of entries) {
    // Si el elemento está en la vista del usuario...
    if (entry.isIntersecting) {
    // Activamos la animación en el elemento
    entry.target.classList.add('animate');
    }
}
});

// Seleccionamos el elemento al que queremos aplicar la animación
const element1 = document.querySelector('.artdos');
const element2 = document.querySelector('.artres');
const element3 = document.querySelector('.artcuatro');
// Comenzamos a observar el elemento para detectar cuando entre en la vista del usuario

observer.observe(element1);
observer.observe(element2);
observer.observe(element3);





