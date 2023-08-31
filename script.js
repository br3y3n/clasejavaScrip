
/*const a= document.querySelector(".div")
console.log()
a.children[0].textContent="texto modificado"
console.log(a)*/
const nombre= document.querySelector("#nombre")
const edad= document.querySelector("#edad")
const a= document.querySelector(".div")

function validacion(){
    if(nombre.value === "brayan"){
        a.children[0].textContent=`hola ${nombre.value}`
        a.children[1].textContent=`tienes ${edad.value}`
    } else{
        document.write(`Usuario no valido: ${nombre.value}`)
    } 
}
  
