//Enviar los datos de la pagina principal a la del certificado
const enviarDatos= ()=>{
   let nombre= document.getElementById("nombre").value
   let dni= document.getElementById("dni").value
   let fecha= document.getElementById("fecha_bautismo").value
   let libro= document.getElementById("libro").value
   let pagina= document.getElementById("pagina").value
   window.location.href = `./pages/certificado.html?nombre=${nombre}&dni=${dni}&fecha=${fecha}&libro=${libro}&pagina=${pagina}`
}




         