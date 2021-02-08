function actualizarHora() {
    let fecha = new Date(),
        horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();

    let pHoras = document.getElementById("horas"),
        pMinutos = document.getElementById("minutos"),
        pSegundos = document.getElementById("segundos"),
        pDiaSemana = document.getElementById("diaSemana"),
        pNumDia = document.getElementById("numDia"),
        pMes = document.getElementById("mes"),
        pAnio = document.getElementById("anio");


    let semanas = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    pDiaSemana.innerHTML = semanas[fecha.getDay()];

    numDia.innerHTML = fecha.getDate();



    let mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Noviembre", "Diciembre"];
    pMes.innerHTML = mes[fecha.getMonth()];

    pAnio.innerHTML = fecha.getFullYear();

    //asignar las horas, min y seg
    if (horas < 10) {
        horas = '0' + horas;
    }

    if (minutos < 10) {
        minutos = '0' + minutos;
    }

    if (segundos < 10) {
        segundos = '0' + segundos;
    }


    pHoras.innerHTML = horas;
    pMinutos.innerHTML = minutos;
    pSegundos.innerHTML = segundos;


}


function cambiarColor(color) {
    let section = document.getElementsByTagName("section");
    console.log(section);


    if (color == "pink") {
        section[0].className = "w-75 pink"
    }
    if (color == "azul") {
        section[0].className = "w-75 blue"
    }
    if (color == "green") {
        section[0].className = "w-75 green"
    }
}

window.setInterval(actualizarHora, 1000);