let amarillo= document.querySelector(".amarillo ")
let azul = document.querySelector(".Azul");
let rojo= document.querySelector(".rojo");
let titulo= document.querySelector(".titulo ");
let otroColor= document.querySelector(".otroColor");
console.log(amarillo,azul,rojo)

amarillo.addEventListener("click", () => {
    console.log("Hola")
    document.body.style.backgroundColor="gold";
    azul.style.display="none"
    rojo.style.display="none"
    titulo.textContent = "EL COLOR AMARILLO ES BONITO";
    otroColor.style.display="block"

})
azul.addEventListener("click", () => {
    document.body.style.backgroundColor="blue"
    amarillo.style.display="none"
    rojo.style.display="none"
    titulo.textContent = "EL COLOR AZUL ES BONITO";
    otroColor.style.display="block"
})
rojo.addEventListener("click", () => {
    document.body.style.backgroundColor="red"
    azul.style.display="none"
    amarillo.style.display="none"
    titulo.textContent = "EL COLOR ROJO ES BONITO";
    otroColor.style.display="block"

})

otroColor.addEventListener("click", () => {
    amarillo.style.display="block"
    azul.style.display="block"
    rojo.style.display="block"
    otroColor.style.display="none"
    titulo.textContent = "ESCOGE OTRO COLOR";
    document.body.style.backgroundColor="white"
})