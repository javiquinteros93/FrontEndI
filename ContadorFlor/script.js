const diasRegreso = document.getElementById('dias');
const horasRegreso = document.getElementById('horas');
const minutosRegreso = document.getElementById('minutos');
const segundosRegreso = document.getElementById('segundos');

const regresoFlor = 'December 8, 2021 06:55:00';

function cuentaAtras(){
    const diaLlegada = new Date(regresoFlor);
    const diaActual = new Date();

    const segundosTotales = (diaLlegada - diaActual) / 1000;

    const dias = Math.floor(segundosTotales / 3600 / 24);
    
    const horas = Math.floor(segundosTotales / 3600) % 24;

    const minutos = Math.floor(segundosTotales / 60) % 60;

    const segundos = Math.floor(segundosTotales) % 60;

    diasRegreso.innerHTML = formatoTiempo(dias);
    horasRegreso.innerHTML = formatoTiempo(horas);
    minutosRegreso.innerHTML = formatoTiempo(minutos);
    segundosRegreso.innerHTML = formatoTiempo(segundos);
    
}

function formatoTiempo(tiempo){
    return tiempo < 10 ? (`0${tiempo}`) : tiempo;
}

cuentaAtras();

setInterval(cuentaAtras, 1000);