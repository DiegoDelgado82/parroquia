//Enviar los datos de la pagina principal a la del certificado
const enviarDatos= ()=>{
   let nombre= document.getElementById("nombre").value
   let dni= document.getElementById("dni").value
   let fecha= document.getElementById("fecha_bautismo").value
   let libro= document.getElementById("libro").value
   let pagina= document.getElementById("pagina").value
   window.location.href = `./pages/certificado.html?nombre=${nombre}&dni=${dni}&fecha=${fecha}&libro=${libro}&pagina=${pagina}`
}


function mostrarFormulario(tipo) {
   Swal.fire({
       title: 'Complete los siguientes campos:',
       html:
           '<input id="nombre" class="swal2-input" placeholder="Nombre">' +
           '<input type="number" id="dni" class="swal2-input" placeholder="DNI">' +
           '<input type= "date" id="fecha" class="swal2-input" placeholder="Fecha">' +
           '<input id="padrinos" class="swal2-input" placeholder="Nombre Padrinos">' +
           '<input type="number" min=1 id="nroLibro" class="swal2-input" placeholder="Número de Libro"> <br>' +
           '<input type="number" id="nroFolio" class="swal2-input" placeholder="Número de Folio">',
       focusConfirm: false,
       preConfirm: () => {
           const nombre = Swal.getPopup().querySelector('#nombre').value;
           const dni = Swal.getPopup().querySelector('#dni').value;
           const fecha = Swal.getPopup().querySelector('#fecha').value;
           const padrinos = Swal.getPopup().querySelector('#padrinos').value;
           const nroLibro = Swal.getPopup().querySelector('#nroLibro').value;
           const nroFolio = Swal.getPopup().querySelector('#nroFolio').value;

           // Puedes hacer lo que desees con los datos aquí, como enviarlos a un servidor o mostrarlos en la consola.
           console.log('Nombre:', nombre);
           console.log('DNI:', dni);
           console.log('Fecha:', fecha);
           console.log('Nombre de Padrinos: ', padrinos);
           console.log('Número de Libro:', nroLibro);
           console.log('Número de Folio:', nroFolio);
           window.location.href = `./pages/certificado.html?nombre=${nombre}&dni=${dni}&fecha=${fecha}&libro=${nroLibro}&folio=${nroFolio}&padrinos=${padrinos}&tipo=${tipo}`
       }
   });
}

         