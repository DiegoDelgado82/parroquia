


//Descarga la imagen de la página
imprimirCertificado=()=>{
    Swal.fire({
        title: 'Nombre del archivo',
        input: 'text',
        inputPlaceholder: 'Escribe un nombre para el archivo',
        showCancelButton: true,
        confirmButtonText: 'Descargar',
        cancelButtonText: 'Cancelar',
        inputValidator: (value) => {
            if (!value) {
                return 'Debes ingresar un nombre para el archivo';
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const container = document.getElementById('container');
            html2canvas(container).then(function(canvas) {
                const imgData = canvas.toDataURL('image/jpeg');
                const a = document.createElement('a');
                a.href = imgData;
                a.download = result.value + '.jpeg'; 
                a.click();
            });
        }
    });
}

const imprimirCert =(nombre)=>
{
    
    const container = document.getElementById('container');
            html2canvas(container).then(function(canvas) {
                const imgData = canvas.toDataURL('image/jpeg');
                const a = document.createElement('a');
                a.href = imgData;
                a.download = nombre + '.jpeg'; 
                a.click();
            });
            

        
        }



//Tomar los datos enviados desde la página principal


const tomarDatosCertificado=()=>{
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
  const url = new URL(window.location.href);
  let nombre = url.searchParams.get("nombre");
  let dni = url.searchParams.get("dni");
  let fecha = new Date(url.searchParams.get("fecha"))
  let libro = url.searchParams.get("libro");
  let pagina = url.searchParams.get("pagina");
  const textoPrincipal= document.getElementById("textoPrincipal")
  textoPrincipal.innerHTML=`Por la presente certifico que <b>${nombre.toUpperCase()}</b>, DNI ${dni} recibió la confirmación en esta parroquia, Nuestra Señora de los Ángeles, el día <b> ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}</b> 
  según consta en el libro n°${libro}, página ${pagina}`
 imprimirCert(nombre)
  
}