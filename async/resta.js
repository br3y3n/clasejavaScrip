async function resta(a,b){
    const promise= new Promise((resolve,reject)=>{
        try{
            let resta= a-b;
            resolve(resta);
        }catch(err){
            console.error("la resta no se pudo resolver"+err);
        }
    });
    let resultado = await promise
    console.log(resultado);
}
resta(200,143);