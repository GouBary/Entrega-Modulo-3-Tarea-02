export function Mostrar(Contenido,data){ 
    Contenido.innerHTML=''
    data.forEach((element) => {
        const {miniatura,icono,Ncanal,video,Titulo,Vistas,Fechas,id } = element
         Contenido.innerHTML +=`<div class="contenedor">
         <a href="../pages/Reproduccion.html">
             <img class="foto1" id=${id} src="${miniatura}" alt="">
         </a>
         <a  >
         
         </a>
         <div class="Informacionvideo">  
          
              <img class="Imagen2"  src="${icono}" alt="">
         <p class="Ncanal">${Ncanal}</p> <p class="Titulo">${Titulo}</p><p class="Fecha">${Fechas}</p>
         
         <p class="vistas">${Vistas}</p></div>
         </div>   
       
         `
       
        
    });
}