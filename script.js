const texto = document.querySelector('.text');
const display = document.querySelector('.text-display');
const complete = document.querySelector('.test-complete');
const resultadoStats = document.querySelector('.test-complete-stats');
const resultadoBotao = document.querySelector('.test-complete-button');
const goAgain = document.querySelector('.go-again');
const restart = document.querySelector('.restart');
const menu = document.querySelector('.menu');
const passage = document.querySelector('.passage');
const accuracyValue = document.querySelector('.accuracy-value');
const wpmValue = document.querySelector('.wpm-value');
const timeValue = document.querySelector('.characters-value');


let erros = 0;
let textoAnterior = '';
let totalTentativas = 0;
let tempoInicio = null;

function detectar() {
    texto.addEventListener('input', () => {
        const caracteres = display.querySelectorAll('span');
        const textoAtual = texto.value;
        if (tempoInicio === null && textoAtual.length > 0) {
            tempoInicio = Date.now();
        }
        if (textoAtual.length > textoAnterior.length) {
            const indice = textoAtual.length - 1;
            totalTentativas++;

            if (textoAtual[indice] !== fraseAleatoria[indice]) {
                erros++;
            }
        }

        textoAnterior = textoAtual;

        caracteres.forEach((caractere, indice) => {

            const letraDigitada = texto.value[indice];

            caractere.classList.remove('correct', 'incorrect');

            if (letraDigitada === undefined) {
                return;
            }

            if (letraDigitada === caractere.textContent) {
                caractere.classList.add('correct');
            } else {
                caractere.classList.add('incorrect');
            }
        });

        const corretos = display.querySelectorAll('.correct').length;
        const incorretos = display.querySelectorAll('.incorrect').length;

        const accuracy = totalTentativas > 0
            ? Math.max(0, ((totalTentativas - erros) / totalTentativas) * 100)
            : 0;

        if (texto.value === fraseAleatoria) {
            const tempoFim = Date.now();
            const tempoSegundos = (tempoFim - tempoInicio) / 1000;
            timeValue.textContent = `${Math.round(tempoSegundos)}s`;
            const wpm = (texto.value.length / 5) * (60 / tempoSegundos);
            wpmValue.textContent = Math.round(wpm);
            accuracyValue.textContent = `${accuracy.toFixed(0)}%`;

            complete.style.display = 'block';
            resultadoStats.style.display = 'flex';
            goAgain.style.display = 'block';
            menu.style.display = 'none';
            passage.style.display = 'none';
        }
    });
}



function displayFrase() {
    fraseAleatoria.split('').forEach(caracteres => {
        const span = document.createElement('span');
        span.innerText = caracteres;
        display.appendChild(span);
    });
}

const frases = [
    "The quick brown fox jumps over the lazy dog.",
    "I am Optimus Prime, leader of the Autobots.",
    "I am Groot.",
    "I always come back",
    "Just Gold"
]
let fraseAleatoria = sortearFrase();

function sortearFrase() {
    const indice = Math.floor(Math.random() * frases.length);
    return frases[indice];
}

texto.maxLength = fraseAleatoria.length;

displayFrase();
detectar();



function reiniciarTeste() {
    function reiniciar() {
        fraseAleatoria = sortearFrase();

        display.innerHTML = '';
        texto.value = '';
        erros = 0;
        totalTentativas = 0;
        textoAnterior = '';
        tempoInicio = null;
        texto.maxLength = fraseAleatoria.length;

        fraseAleatoria.split('').forEach((caracteres) => {
            const span = document.createElement('span');
            span.innerText = caracteres;
            display.appendChild(span);
        });

        complete.style.display = 'none';
        resultadoStats.style.display = 'none';
        goAgain.style.display = 'none';
        menu.style.display = 'flex';
        passage.style.display = 'flex';
    }

    restart.addEventListener('click', reiniciar);
    goAgain.addEventListener('click', reiniciar);
}

reiniciarTeste();
