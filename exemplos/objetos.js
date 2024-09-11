// Exemplo de declaração e utilização de objetos

// Declaração do objeto
let listaDeObjetos = {
    // propriedades do objeto
    nome: "Cristhian",
    idade: 26,
    musica: "rock and roll"
}

// Exibindo as informações no console
console.log(listaDeObjetos.nome)
console.log(`Olá, meu nome é ${listaDeObjetos.nome}, tenho ${listaDeObjetos.idade} anos e gosto de ${listaDeObjetos.musica}`);

// Exemplo de um método dentro do objeto
let funcao = {
    nome: "Cesar",
    metodo: (valor) => { // valor é um argumento
        console.log(valor)
    }
}

// Exibindo o metodo no console
funcao.metodo(funcao.nome)