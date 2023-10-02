const cells = document.querySelectorAll(".subParent div");
x=true
cells.forEach(cell => {
    cell.addEventListener("click", () => {
        // Implementar la lógica del juego aquí
        const icon = document.createElement("i");
        if(x==true){
            icon.className = "fa-solid fa-x"; // Puedes usar una clase de ícono de FontAwesome
            cell.appendChild(icon);
            x=false
        }else{
            icon.className = "fa-solid fa-o"; // Puedes usar una clase de ícono de FontAwesome
            cell.appendChild(icon);
            x=true
        }
    });
});

// URL del archivo JSON remoto
const url = './celdas.json';

fetch(url)
  .then(response => response.json()) // Convierte la respuesta a un objeto JSON
  .then(data => {
    // Aquí puedes trabajar con los datos JSON
    console.log(data);
  })
  .catch(error => {
    // Manejo de errores
    console.error('Error al obtener el JSON:', error);
  });

