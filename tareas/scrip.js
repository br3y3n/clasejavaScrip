const boton1= document.querySelector(".boton1")
const boton2= document.querySelector(".boton2")
const boton3= document.querySelector(".boton3")
const boton4= document.querySelector(".boton4")
const barra= document.querySelector(".barra")
const contenido= document.querySelector(".contenido")
let contador=0;
let opcion=0
function terminado(boton){
        contador +=25
        boton.innerHTML="Terminado"
        boton.style.color="#1ef253"
        contenido.style.background="#0f0feb"
        contenido.style.width= contador+"%"
        opcion++;
        if(opcion==1){
            boton.addEventListener("click", () =>{ 
                contador -=50
                boton.innerHTML="Terminar"
                boton.style.color="#f12727"
                contenido.style.background="#0f0feb"
                contenido.style.width= contador+"%"
                opcion=0
         });
        }   
        if(opcion==2){
            opcion =0
        }

}