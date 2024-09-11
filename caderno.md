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
- [] Controle de fluxo (if/else)
- [] Estrutura de repetição (for, while)

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
- [] Operadores de comparação: == != <= >= < >
- [] Spread operator: ...

## Estruturas de dados:

### Arrays: 

- [x] Uma lista que contém qualquer tipo de dado
    - arrays são declaros com colchetes "[]"
    - Exemplo: $ let listaDeNomes = ["Cristhian", "Leticia"]
- [x] Métodos de array: push, [find, forEach, filter, map] : HOF (Higher Order Functions)

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

- [] while

# Condicionais

- [] switch
- [] if/else

## Módulos em Node.js:

- [] Importação de módulos (require, CommonJS)
- [] Biblioteca 'inquirer' para criar prompts interativos
- [] FS (file system)

## JSON

- [] Javascript Object Notation (.json)
- [] JSON.parse(): transforma de JSON para JS
- [] JSON.stringify(): transforma de JS para JSON

## Programação assíncrona e Promises:

- [] Uso de funções assíncronas (async/await)