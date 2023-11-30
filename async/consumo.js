const contenido=document.getElementById("contenido");


async function consumo(){
    const response= await fetch("https://jsonplaceholder.typicode.com/posts")
    const data= await response.json();
    console.log(data);
    data.forEach(element => {
      
   
    const content=` <tr>
    <td>${element.userId}</td>
    <td>${element.id}</td>
    <td>${element.title}</td>
    <td>${element.body}</td>
    <td><a href="">Ver mas</a></td>
    
   </tr>`
   contenido.innerHTML += content
   
    });
   


}
async function consumoshop(){
    const response= await fetch("https://jsonplaceholder.typicode.com/posts/2")
    const data= await response.json();
    console.log(data);
}
consumo()

