let imagen= document.querySelector(".imagenPrincipal")
let arrayImagen=["./img/cripton-amarillla.png","./img/cripton-azul.png","./img/cripton-edicionEspecial.jpg"]
let indice=0;
function mostrarImagen(){
   
    setInterval(()=>{
        imagen.src=arrayImagen[indice]
        indice++;
        if(indice>arrayImagen.length-1) {
            indice=0
        }
    }, 1000)
}
mostrarImagen()
/*
const sumar= (n1,n2) =>{
    console.log(n1+n2)
}
sumar(4,6)
const mayorEdad=function(n){
    if(n>=18){
        console.log("la persona es mayor de edad")
    }else{
        console.log("la persona es menor de edad")
    }
}
//let usuario= prompt("Ingresa tu edad")
//mayorEdad(usuario)
const saludar= (nombre)=> `hola ${nombre}`
console.log(saludar("brayan"))
const datos= (n)=>({
    id:1,
    nombre:n,
    ciudad:"popayan",
    edad:18
})
console.log(datos("brayan"))*/
const vocal= (nombre)=>{
     let nombree= Array.from(nombre)
     let truef= nombree.filter((item) => item=="a"||item=="e" || item=="i" || item=="o"|| item=="u" )
     if(truef.length==0){
        return false
    }else{
        return true
        }
}
console.log(vocal("kjhhkhjgyhggyhggU".toLowerCase()))
setTimeout(()=>{})