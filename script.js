const horas = document.getElementById('horas'); //Cria variavel no java e pega elemento horas do html
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){ //set interval para executar varias vezes um função
    let dateToday = new Date(); //variavel let nao podem ser declaradas novamente 
    let hr = dateToday.getHours(); // declara varaivel let e pega do navegador a hora 
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (hr < 10 ) hr = '0' + hr;  // Se a hora for menor que 10 ele bota um zero na frente
    if (min < 10 ) min = '0' + min;
    if (seg < 10 ) seg = '0' + seg;


    horas.textContent = hr; // muda o conteudo do elemento html para oque ta declarado na variavel HR do Javascript
    minutos.textContent = min;
    segundos.textContent = seg;

})