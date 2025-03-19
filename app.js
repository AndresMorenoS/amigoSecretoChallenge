let listaDeAmigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }

    listaDeAmigos.push(nombre);
    inputAmigo.value = '';
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = '';

    listaDeAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert('Agrega al menos 2 amigos para realizar el sorteo');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSecreto = listaDeAmigos[indiceAleatorio];
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `¡${amigoSecreto} es tu amigo secreto!`;
}

document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});