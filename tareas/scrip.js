const boton1= document.querySelector(".boton1")
const boton2= document.querySelector(".boton2")
const boton3= document.querySelector(".boton3")
const boton4= document.querySelector(".boton4")
const barra= document.querySelector(".barra")
const contenido= document.querySelector(".contenido")
let contador=0;
let opcion1=1
let opcion2=0
function terminado(boton){

        contador +=25
        boton.innerHTML="Terminado"
        boton.style.color="#1ef253"
        contenido.style.background="#0f0feb"
        contenido.style.width= contador+"%"
        opcion1=1
        console.log(" if op1 "+opcion1)
    
 boton.addEventListener("click", () =>{
    
        contador -=25
        boton.innerHTML="Terminar"
        boton.style.color="#f12727"
        contenido.style.background="#0f0feb"
        contenido.style.width= contador+"%"
        opcion1=2
        console.log("else op1"+opcion1)
 });
}
boton1.addEventListener("click", () =>{
    terminado(boton1)
     console.log(contador)
});
boton2.addEventListener("click", () =>{
    terminado(boton2)
     console.log(contador)
});

boton3.addEventListener("click", () =>{
    terminado(boton3)
     console.log(contador)
});

boton4.addEventListener("click", () =>{
    terminado(boton4)
    console.log(contador)
});
