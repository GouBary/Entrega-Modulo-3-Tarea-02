const form1 =document.getElementById("Formulario")
        // onsubmit sirve para asociar una funcion de test de algun formulario
          form1.onsubmit=(Bnb)=>{
            //   por si sucede algo cancela el evento 
            Bnb.preventDefault();
            let Nvideo =document.getElementById("F1").value
            let Usuario =document.getElementById("F2").value
            let Views =document.getElementById("F3").value
            let Date =document.getElementById("F4").value
            let miniatura =document.getElementById("F5").value
            let Category =document.getElementById("F6").value
            if(Nvideo === '' || Usuario === '' ||  Views === '' || Date=== '' || miniatura === '' || Category === ''  ){ 
            Swal.fire (
                'No lo has hecho bien!',
                'Rellenalos 7u7!',
                'warning'
            )
        } else { Swal.fire (
            'Lo has hecho bien!',
            'muy bien,quedo guardado!',
            'success'
        ) }
        const Upvideo ={ 
            id: 30,
            miniatura:miniatura,
            Ncanal:Usuario,
            Titulo:Nvideo,
            Vistas:Views,
            Fechas: Date,
            icono:"../canal/7.jpg",
        }
        // console.log(Upvideo)
        localStorage.setItem('Uptext',JSON.stringify(Upvideo))
        
            
        }