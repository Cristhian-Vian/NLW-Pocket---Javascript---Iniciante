// Exemplo de delcaração e utilização de arrays

let lista = ["Cristhian", "Leticia", 7, "junho", 1998]

// Exibindo as informações no console com o operador de concatenação (+)
console.log("Olá, meu nome é " + lista[0])

// Exibindo os dados no console com placeholders
console.log(`Olá, meu nome é ${lista[0]}`)

// Exibindo todos os elementos da lista
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}