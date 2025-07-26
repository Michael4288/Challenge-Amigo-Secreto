//array para almacenar los nombres de los amigos
let amigos = [];
let amigols;
//funcion para agregar amigos
function agregarAmigos() {
   // console.log("Amigo agregado");
    let amigo = document.getElementById('amigo').value;
    if (amigo == "") {
        alert("Por favor, inserte un nombre.")
    }else {
        amigos.push(amigo);
        limpiarCampo();
        mostrarAmigos();
    }
    
    console.log(amigos);
}

//funcion para mostrar el amigo a la lista 
function mostrarAmigos() {
    amigols = document.querySelector('#listaAmigos');
    amigols.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let lista = document.createElement("li");
        lista.innerHTML = amigos[i];
        amigols.appendChild(lista);
    }
}

//funcion para limpiar el campo de entrada
function limpiarCampo() {
    document.getElementById('amigo').value = "";
}

//funcion para sortear el amigo
function sortearAmigo() {
    let Ganador =document.getElementById('resultado');
    if(amigos.length < 2) {
        alert("Por favor, inserte al menos 2 amigos.");
    } else {
        let amigoSecreto = Math.floor(Math.random() * amigos.length);
        let amigoGanador = amigos[amigoSecreto];
        amigols.innerHTML = "";
        Ganador.innerHTML = "El amigo secreto sorteado es: " + amigoGanador;
    }
}