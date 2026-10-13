# Typing Speed Test

Projeto front-end de um teste de digitação em JavaScript puro, inspirado no desafio do Frontend Mentor. O objetivo é praticar velocidade e precisão ao digitar frases aleatórias, com feedback visual em tempo real sobre cada caractere.

## Visão geral

Este projeto foi construído para simular um ambiente de treino de digitação, com:

- frases aleatórias selecionadas pelo JavaScript;
- indicação visual de letras corretas e incorretas;
- painel de estatísticas com WPM, precisão e tempo;
- botões de dificuldade e modo de teste;
- tela de conclusão e reinício do teste.

A interface foi desenvolvida em HTML e CSS, com interações em JavaScript para controlar o comportamento do jogo.

## Como funciona

1. A página carrega uma frase aleatória da lista disponível no script.
2. O usuário clica na área de digitação e começa a escrever.
3. Cada caractere digitado é comparado com a frase mostrada na tela.
4. As letras corretas recebem destaque em verde e as incorretas em vermelho.
5. Quando a frase é concluída corretamente, a interface exibe uma tela de resultado com os dados finais.
6. O botão de reinício gera uma nova frase e prepara o ambiente para outro teste.

## Funcionalidades atuais

- Seleção visual de dificuldade: Easy, Medium e Hard;
- Seleção de modo: Timed (60s) e Passage;
- Exibição de texto de referência para digitação;
- Validação caractere a caractere;
- Mensagem de "Test Complete" ao finalizar o texto;
- Botão para repetir o teste;
- Header com indicador de personal best.

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
└── README-template.md
```

## Como executar localmente

Você pode abrir o arquivo `index.html` diretamente em um navegador, ou rodar um servidor local simples:

```bash
python -m http.server 8000
```

Depois, acesse:

```text
http://localhost:8000
```

## Observações

Este é um projeto de estudo e prática de front-end. A parte visual e a lógica básica de digitação já estão funcionando, mas ainda há elementos de UI e controles que podem ser melhorados e ampliados no futuro, como cálculo mais completo de WPM, temporizadores reais, persistência de melhor pontuação e ajustes mais refinados de dificuldade.

## Autor

- GitHub: [Snakww](https://github.com/Snakww)
- Desafio: [Frontend Mentor - Typing Speed Test](https://www.frontendmentor.io/challenges/typing-speed-test)


