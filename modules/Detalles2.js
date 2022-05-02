
export function Detalles2(Contenido,data){ 
    Contenido.innerHTML=''
    data.forEach((element) => {
        const {icono,Ncanal,video,Titulo,Vistas,Fechas} = element
          Contenido.innerHTML +=`   
          <div class="Todo2">
          <video class="Video1" src="${video}" controls></video>
      <div class="Informacion" id="Informacion">
          <img src="${icono}" alt="">
      <h1 class="Titulo">${Titulo}</h1>
      <h2 class="Ncanal">${Ncanal}</h2>
      <p class="Views">${Vistas}</p>
      <p class="Fechas">${Fechas}</p>

      </div>
  </div>
    
         `
       
        
    });
}
export function Sugeridos2(Contenido,data){ 
    Contenido.innerHTML=''
    data.forEach((element) => {
        const {icono,Ncanal,miniatura,Titulo,Vistas,Fechas} = element
          Contenido.innerHTML +=`
          <div class="VideosMiniaturas">
          <img id="Imagenes" src="${miniatura}" alt=""> 
          <img id="Imagenes2" src="${icono}" alt="">
      </div>
      <div class="Text1">
      <h1 class="T1">${Titulo}</h1>
      <h2 class="T2">${Ncanal}</h2>
      <p class="T3">${Vistas}</p>
      <p class="T4">${Fechas}</p>
       </div> 
    
         `
       
        
    });
}
