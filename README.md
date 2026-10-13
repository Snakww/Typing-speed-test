# Typing Speed Test

Projeto front-end de um teste de digitação em JavaScript puro, inspirado no desafio do Frontend Mentor. O objetivo é praticar velocidade e precisão ao digitar frases aleatórias, com feedback visual em tempo real sobre cada caractere.

## Visão geral

Este projeto simula um ambiente de treino de digitação, com:

- frases aleatórias selecionadas pelo JavaScript;
- destaque visual para letras corretas e incorretas;
- painel de estatísticas com WPM, precisão e tempo;
- opções de dificuldade e modo de teste;
- tela de conclusão e reinício do teste.

A interface foi desenvolvida com HTML e CSS, enquanto a lógica e a interação foram implementadas em JavaScript puro.

## Como funciona

1. A página carrega uma frase aleatória a partir de uma lista pré-definida.
2. O usuário clica na área de digitação e começa a escrever.
3. Cada caractere digitado é comparado com a frase exibida na tela.
4. As letras corretas ganham destaque em verde e as incorretas em vermelho.
5. Quando a frase é concluída, a interface mostra uma tela final com o resultado.
6. O botão de reinício gera uma nova frase e prepara o ambiente para outro teste.

## Funcionalidades atuais

- seleção de dificuldade: Easy, Medium e Hard;
- seleção de modo: Timed (60s) e Passage;
- exibição do texto alvo para digitação;
- validação caractere por caractere;
- mensagem de conclusão ao finalizar o teste;
- botão para repetir a rodada;
- cabeçalho com indicador de Personal Best.

## Stack utilizada

- HTML5
- CSS3
- JavaScript puro
- Google Fonts (Sora)

## Estrutura do projeto

```text
typing-speed-test-main/
├── assets/
│   └── images/
├── index.html
├── style.css
├── script.js
├── data.json
├── style-guide.md
├── preview.jpg
├── README.md
└── .gitignore
```

## Como executar localmente

Você pode abrir o arquivo `index.html` diretamente no navegador, ou usar um servidor local simples:

```bash
python -m http.server 8000
```

Depois, acesse:

```text
http://localhost:8000
```

## Observações

Este é um projeto de estudo e prática de front-end. A parte visual e a lógica básica de digitação já estão funcionando, mas ainda há espaço para evoluções futuras, como:

- cálculo mais completo de WPM;
- temporizador real e mais preciso;
- persistência da melhor pontuação;
- refinamento da lógica de dificuldade;
- melhorias na experiência e acessibilidade.

## Autor

- GitHub: [Snakww](https://github.com/Snakww)
- Desafio: [Frontend Mentor - Typing Speed Test](https://www.frontendmentor.io/challenges/typing-speed-test)
