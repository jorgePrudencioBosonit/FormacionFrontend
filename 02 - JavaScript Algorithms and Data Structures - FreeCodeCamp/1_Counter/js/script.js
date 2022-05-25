const numContador = document.getElementById("numContador");
const btnStart = document.getElementById("start");
const btnPause = document.getElementById("pause");
const btnReset = document.getElementById("reset");
const btnCountUp = document.getElementById("countUp");
const btnCountDown = document.getElementById("countDown");
const inputInicioContador = document.getElementById("inicioContador");
const inputIncrementoContador = document.getElementById("incrementoContador");

var valorContador = parseInt(inputInicioContador.value);
var saltoContador = parseInt(inputIncrementoContador.value);
var intervalo = null;
let estaContando = false;

//inicia intervalo
function startIntervalo() {
    valorContador += saltoContador;
    numContador.innerHTML = valorContador;
};

//inicia contador
function startContador() {
    intervalo = setInterval(startIntervalo, 1000);
    estaContando = true;
};

//pausa contador
function pausaContador() {
    clearInterval(intervalo);
    estaContando = false;
};

//evento btnStart
btnStart.addEventListener("click", () => {
    if (!estaContando)
        startContador();
});

//evento btnPause
btnPause.addEventListener("click", () => {
    if (estaContando)
        pausaContador();
});

//evento btnReset
btnReset.addEventListener("click", () => {
    valorContador = parseInt(inputInicioContador.value);
    numContador.innerHTML = valorContador;
});

//evento btnCountUp
btnCountUp.addEventListener("click", () => {
    if (saltoContador < 0)
        saltoContador = Math.abs(saltoContador);
});

//evento btnCountDown
btnCountDown.addEventListener("click", () => {
    if (saltoContador > 0)
        saltoContador = saltoContador * -1;
});

//evento inputIncrementoContador
inputIncrementoContador.addEventListener("change", () => {
    saltoContador = parseInt(inputIncrementoContador.value);
});