## Linguagem de programação

Maneira de dar instrução ao computador.
Como um lego, você irá utilizar peças para criar algoritmos, ou seja, para resolver problemas.

> 💡 **Algoritmo**: Sequência de passos lógica e finita para resolução de um problema.

## Peças de uma linguagem

- [x] Comentários
- [x] Declaração de variáveis (const, let)
    - let: declara uma variável mútavel
    - const: declara uma variável imútavel
- [x] Operadores (atribuição, concatenação, matemáticos, lógicos )
- [x] Tipos de dados (string, number, boolean)
- [x] Estrutura de dados (functions, object, array)
- [x] Controle de fluxo (if/else)
- [x] Estrutura de repetição (for, while, switch)

# Fases da resolução de um problema

Coletar os dados
Processar os dados (manipular, alterar ...)
Apresentar os dados

## Escopo e variáveis:

- [x] Variáveis globais e locais
    - variáveis declaradas fora de chaves ("{ }") são de escopo global
    - variáveis declaradas dentro de chaves "{ }", são de escopo local
    - Exemplo:
        $ const variavelGlobal = "Essa variável é de escopo global!"
        ${
        $    const variavelLocal = "Essa variável é do escopo local!"
        $}
- [x] Constantes

## Tipos de dados:

- [x] Strings (texto): "" '' ``
- [x] Numbers: 2 1.4
- [x] Boolean: true, false

# Operadores

- [x] Operadores de atribuição de valor: =
- [x] Operador de contatenação: +
- [x] Operadores de comparação: == != <= >= < >
    - != ("diferente de")
- [x] Spread operator: ...
    - Spread é uma ferramenta que permite "espalhar" os elementos de um iterável (como arrays ou objetos) em outros contextos

## Estruturas de dados:

### Arrays: 

- [x] Uma lista que contém qualquer tipo de dado
    - arrays são declaros com colchetes "[]"
    - Exemplo: $ let listaDeNomes = ["Cristhian", "Leticia"]
- [x] Métodos de array: push, [find, forEach, filter, map] : HOF (Higher Order Functions)
    - Toda HOF precisa de uma função para ser executada
    - forEach: "para cada"
    - map: modifica o array original

### Objetos:
- Objetos são declarados com chaves "{}"
    - Exemplo: $ let listaDeObjetos = {nome: "Cristhian", idade: 26}
        - "nome" é uma propriedade do objeto, e "Cristhian" é o valor dessa propriedade
- [x] Atributos e métodos
    - métodos normalmente estão dentro de objetos, e tem a estrutura igual a de uma function
- [x] Criação e manipulação de objetos
- [x] Acesso a propriedades de objetos

### Functions

- Funções normalmente etão fora de objetos
- [x] criar, passar argumento
- [x] excutar
- [x] arrow function / named function
    - exemplo de declaração da arrow function (função de seta "=>"):
        $ const exemplo = () => {
        $   propriedades e valores   
        $}
    - exemplo de declaração da named function:
        $ function exemplo = () {
        $   propriedades e valores
        $}

# Estrutura de repetição

- [x] while

# Condicionais

- [x] switch
- [x] if/else

## Módulos em Node.js:

- [x] Importação de módulos (require, CommonJS)
    - NPM (Node package manager): Gerenciador de pacotes do Node.js para importação de módulos
- [x] Biblioteca 'inquirer' para criar prompts interativos
    - Comando para instalação: $ npm install inquierer
    - select: um elemento HTML que cria uma lista suspensa de opções 
    - input: um elemento HTML que pode criar diversos tipos de campos de entrada, utilizado para coletar dados do usuário
    - checkbox: um tipo específico de input que permite ao usuário selecionar uma ou mais opções de uma lista
- [] FS (file system)

## JSON

- [] Javascript Object Notation (.json)
- [] JSON.parse(): transforma de JSON para JS
- [] JSON.stringify(): transforma de JS para JSON

## Programação assíncrona e Promises:

- [x] Uso de funções assíncronas (async/await)
- O assincronismo permite que o programa continue fazendo outras tarefas enquanto espera por uma operação demorada, como fazer uma requisição a uma API ou ler um arquivo.
- Promises: São objetos que representam o eventual resultado (ou falha) de uma operação assíncrona. É como uma promessa de que algo será feito no futuro.
    - Uma Promise pode estar em três estados: pendente, resolvida ou rejeitada.
    - Quando uma operação assíncrona é iniciada, uma Promise é criada.
    - Quando a operação termina, a Promise é resolvida com um valor (se tudo ocorreu bem) ou rejeitada com um erro.
    - Você pode usar os métodos .then() e .catch() para lidar com os resultados da Promise.

- Async/Await: São sintaxes mais recentes que tornam o trabalho com Promises mais fácil e intuitivo.
    - async: Declara uma função como assíncrona. Dentro dessa função, você pode usar a palavra-chave await.
    - await: Pausa a execução da função até que a Promise seja resolvida, e então retorna o valor resolvido.

## Arquivo .gitignore

- O arquivo .gitignore tem a função de ignorar o controle de versionamento nos arquivos que são passados como parametro