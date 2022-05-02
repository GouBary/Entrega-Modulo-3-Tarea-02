import { videos } from "../scripts/data.js"
import { Mostrar } from "../modules/Detalles.js"
// import { Detalles2 } from "../modules/Detalles2.js"
const xd1 =document.getElementById("Contenido")
console.log(xd1)
const Upvideo2=JSON.parse(localStorage.getItem('Uptext'))
//  null es para negar una igualdad
if(Upvideo2 !== null){
    videos.push(Upvideo2)
}
document.addEventListener("click",({target})=>{
    // console.log(target.id)
    let Idminiatura = target.id
    // .find es para encontrar un patron o secuencia
    let Idobjecto = videos.find(items=> items.id == Idminiatura);
    //  es para devuelver el indice que realiza la llamada
    let Items2 = videos.indexOf(Idobjecto);
    // console.log(Items2)
    localStorage.setItem('IndiceV',Items2);
    localStorage.setItem('Videosaved',JSON.stringify(Idobjecto));
})
document.addEventListener('click',({target}) =>{
    if(target.classList.contains('Boton')){
     const Alarma1=target.id
     const Alarma2=videos.filter((Alerta1)=> Alerta1.Category === Alarma1);
     if(Alarma1 === 'Todos'){
        Mostrar(xd1,videos);
     }else{ 
        Mostrar(xd1,Alarma2);
     }
    }
})



// xd1.document.addEventListener('click', function(){ 
//     console.log("hola")
// })
Mostrar(xd1,videos)


