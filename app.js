// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres de los amigos
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    // Validar que el nombre no esté vacío y no se repita
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya ha sido ingresado.");
        return;
    }

    // Agregar nombre a la lista y actualizar la interfaz
    amigos.push(nombre);
    const listItem = document.createElement("li");
    listItem.textContent = nombre;
    listaAmigos.appendChild(listItem);
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos personas para sortear.");
        return;
    }
    
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
