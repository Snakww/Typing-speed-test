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
const easy = document.querySelector('#easy');
const medium = document.querySelector('#medium');
const hard = document.querySelector('#hard');


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

const frasesEasy = [
    "I am Groot.",
    "I always come back",
    "Just Gold",
    "May the Force be with you.",
    "Live long and prosper.",
    "Do or do not. There is no try.",
    "Fantastic.",
    "I am the one who knocks.",
    "My code doesn't work, I have no idea why. My code works, I still have no idea why.",
    "You are the CSS to my HTML.",
    "It's dangerous to go alone! Take this.",
    "We're not army without a nation. We're an army that has become a nation."
];

const frasesMedium = [
    "The quick brown fox jumps over the lazy dog.",
    "I am Optimus Prime, leader of the Autobots.",
    "In a world full of NPCs, be the main character of your own story.",
    "May the Force be with you, because reality is definitely not on your side.",
    "Not all those who wander are lost, some are just exploring the map.",
    "Reality is frequently disappointing, so I built my own digital universe.",
    "Time is relative, but the wait for a new episode feels absolutely infinite.",
    "We are not tools of the government, or anyone else. Fighting was the only thing I was good at, but at least I always fought for what I believed in.",
    "Building the future and keeping the past alive are one and the same thing.",
    "Even if a soldier is a tool, a weapon is just an instrument. A weapon can't think. A weapon doesn't have a soul.",
    "I'm no hero. Never was, never will be. I'm just an old killer, hired to do some wet work."
];

const frasesHard = [
    "Life isn't just about passing on your genes. We can leave behind much more than just DNA. Through speech, music, literature and movies... what we've seen, heard, felt... anger, joy and sorrow... these are the things I'll pass on. That's what I live for. We need to pass the torch, and let our children read our messy and sad history by its light. We have all the magic of the world otherwise to do it with.",

    "Is there such a thing as an absolute timeless enemy? Under normal circumstances, you’ve been raised to believe that the enemy is the enemy. But times change, and the enemy of today could be the friend of tomorrow.",

    "There is no path. Beyond the scope of light, beyond the reach of Dark... what could possibly await us? And yet, we seek it, insatiably... A lie will remain a lie. Young Hollow, knowing this, do you still desire peace? A liar gave a form to many things, and men created a lie of mirrors. A lie that gives a sweet, warm soul to men. If the soul is but a false illusion, what a splendid lie it is! All remaining is an eternity to wander this drifting world... but no one can change the past.",

    "We will provide the deterrent that this world needs. A force that can operate anywhere, anytime, independent of politics or ideology. We are a paradise for soldiers who have nowhere else to go. This is Outer Heaven.",

    "In the current digital age, trivial information is accumulating every second, preserved in all its triteness. Never fading, seemingly infinite. Rumors, misinformation, stories... All this junk data is threatening to slow down human evolution.",

    "The world has changed. Our war is no longer about nations, ideologies, or ethnicity. It's an endless series of proxy battles, fought by mercenaries and machines. War—and its consumption of life—has become a well-oiled machine. War has changed. ID-tagged soldiers carry ID-tagged weapons, use ID-tagged gear. Nanomachines inside their bodies enhance and regulate their abilities. Genetic control, information control, emotion control, battlefield control… everything is monitored and kept under control. When the battlefield is under total control, war becomes something quite different. It becomes routine.",

    "You enjoy all the killing, that's why! You're just a weapon, a tool for the government, and you're no different from me. We are both the clones of the greatest soldier who ever lived... but I got all the flawed, recessive genes.",

    "Dear America, watching you from my vantage point here in the Capital Wasteland, my heart aches. It aches for what we've lost. We were a nation of laws, of communities, of families. We built great cities, we conquered the stars, and then... we let it all slip away. But do not despair. The Enclave is here. I am here. We will rebuild the American dream, brick by brick, block by block. We will cleanse this great nation of the filth and mutation that has plagued it for two centuries. Together, my friends, we will make America great again. Rest assured, your President is watching over you.",

    "Why are we still here? Just to suffer? Every night, I can feel my leg... and my arm... even my fingers. The body I've lost... the comrades I've lost... won't stop hurting... It's like they're all still there. You feel it, too, don't you?",

    "When the sky clears, the world will find itself with a new centerpiece. But my chief interest is in the prologue. With each change of hands, the world's centers of power will shift. This is the only way to break the cycle.",

    "Rudimentary creatures of blood and flesh, you touch my mind, fumbling in ignorance, incapable of understanding. There is a fraction of an infinity between what you know and what is. We have no beginning. We have no end. We are infinite. Million years after your civilization has been eradicated and forgotten, we will endure. We impose order on the chaos of organic evolution. You exist because we allow it, and you will end because we demand it. Your words are as empty as your future. I am the vanguard of your destruction.",

    "In my restless dreams, I see that town. Silent Hill. You promised me you'd take me there again someday. But you never did. Well, I'm alone there now... In our 'special place'... Waiting for you... Waiting for you to come to see me. But you never do. And so I wait, wrapped in my cocoon of pain and loneliness. I know I've done a terrible thing to you. Something you'll never forgive me for. I wish I could change that, but I can't. I sit here waiting for you, write this letter... James... please, if you can hear me... come to me.",

    "It’s not about changing the world. It’s about doing our best to leave the world the way it is. It’s about respecting the will of others, and believing in your own. At last, I understand the meaning behind the boss's will."
];
const frases = [
    "The quick brown fox jumps over the lazy dog.",
    "I am Optimus Prime, leader of the Autobots.",
    "I am Groot.",
    "I always come back",
    "Just Gold"
]

let dificuldadeAtual = frasesEasy


easy.addEventListener('click', () => {
    dificuldadeAtual = frasesEasy
    reiniciar()
    passage.classList.remove('hard');
});

medium.addEventListener('click', () => {
    dificuldadeAtual = frasesMedium
    reiniciar()
    passage.classList.remove('hard');
});

hard.addEventListener('click', () => {
    dificuldadeAtual = frasesHard
    reiniciar()
    passage.classList.add('hard');

});

let fraseAleatoria = sortearFrase();

function sortearFrase() {
    const indice = Math.floor(Math.random() * dificuldadeAtual.length);
    return dificuldadeAtual[indice];
}

texto.maxLength = fraseAleatoria.length;

displayFrase();
detectar();

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

function reiniciarTeste() {
    restart.addEventListener('click', reiniciar);
    goAgain.addEventListener('click', reiniciar);
}

reiniciarTeste();
