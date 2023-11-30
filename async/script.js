
/*function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function add1(x) {
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    return x + a + b;
  }
  
  add1(10).then((v) => {
    console.log(v); // prints 60 after 4 seconds.
  });
  
  async function add2(x) {
    const p_a = resolveAfter2Seconds(20);
    const p_b = resolveAfter2Seconds(30);
    return x + (await p_a) + (await p_b);
  }
  
  add2(10).then((v) => {
    console.log(v); // prints 60 after 2 seconds.
  });*/

  const heroes={
    capi:{
        nombre:'Capitan America',
        poder: '2000'
    },
    iron:{
        nombre:'AironMan',
        poder: '4000'
    },
    spider:{
        nombre:'SpiderMan',
        poder: '3000'
    }

  }
  /*
const buscarHeroe=(id)=>{
    const heroe= heroes[id];
    return new Promise((resolve, reject)=>{
        if(heroe){
            resolve(heroe)
        }else{
            reject("no existe heroe")
        }
    })

   
}
buscarHeroe("capis").then((resultado)=>{
    console.log(resultado);
})

Promise.all([buscarHeroe("iron"),buscarHeroe("spidedr"),])
.then(([heroe1, heroe2])=>{
    console.log(`enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
}).catch((err)=>{
    alert("Error: " + err)
})
*/
 
  async function funcionPromesas(a,b) {
    const promesa = new Promise((resolve, reject) => {
      try {
        let suma= a+b
        setTimeout(()=>{
            resolve(suma);
        },3000)
        
      } catch (err) {
        console.log(err);
      }
    });
  
    let result= await promesa;
    alert(result)
  }
  
    
    funcionPromesas(12,32)
