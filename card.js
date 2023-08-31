let imagenUno= document.querySelector('.imagenUno');
let imagenDos= document.querySelector('.imagenDos');
let imagenTres= document.querySelector('.imagenTres');
let imagenPrincipal= document.querySelector('.imagenP');
let titulo= document.querySelector('.titulo');
let descripcion= document.querySelector('.descripcion');

imagenUno.addEventListener('click',() => {
    imagenPrincipal.src='./img/xtz250-2020-negra.png'
    titulo.textContent="XTZ 250 NEGRA "
});
imagenDos.addEventListener('click',() => {
    imagenPrincipal.src='./img/images_1.jpg'
    imagenPrincipal.style.width="400px"
    imagenPrincipal.style.height="300px"
    titulo.textContent="XTZ 250 BLANCA "
    console.log(imagenPrincipal);
});
imagenTres.addEventListener('click',() => {
    imagenPrincipal.src='./img/images.jpg'
    imagenPrincipal.style.width="400px"
    imagenPrincipal.style.height="300px"
    titulo.textContent="XTZ 250 AZUL "
});

