//settimeout
let contador = 1;

function saludar() {
    document.write("Hola Mundo<br>");
    contador++;
    if (contador == 3) {
        clearTimeout(tiempo);
    }
}

//window.setTimeout(saludar, 1500);

let tiempo = window.setInterval(saludar, 1000);