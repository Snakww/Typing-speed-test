const texto = document.querySelector('.text');
const display = document.querySelector('.text-display');
const complete = document.querySelector('.test-complete');
const resultadoStats = document.querySelector('.test-complete-stats');
const resultadoBotao = document.querySelector('.test-complete-button');
const goAgain = document.querySelector('.go-again');
const menu = document.querySelector('.menu');
const passage = document.querySelector('.passage');




function detectar() {
    texto.addEventListener('input', () => {
        const caracteres = display.querySelectorAll('span');

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

        if (texto.value === fraseAleatoria) {
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
    goAgain.addEventListener('click', () => {
        fraseAleatoria = sortearFrase();

        display.innerHTML = '';
        texto.value = '';
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
    });
}



reiniciarTeste();
