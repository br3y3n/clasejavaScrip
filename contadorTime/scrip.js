let contador= document.querySelector(".segundos")
let minuto = document.querySelector(".minutos")
let hora = document.querySelector(".horas")
let boton= document.querySelector(".boton");
const detener= document.querySelector(".detener");
let minutos=0
let horas=0;
boton.addEventListener("click",() =>{
    let times = 1
        const intervalID = setInterval (() => {
            contador.textContent = times
            times++
            if(times==60){
               times=0
               minutos++;
               minuto.textContent=minutos
               if(minutos==60){
                minutos=0
                horas++;
                hora.textContent=horas
               }
            }
            detener.addEventListener("click",() =>{ 
                clearInterval(intervalID)
                boton.textContent="SEGUIR"
            })
    }, 1000)
});
