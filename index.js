const { select, input } = require('@inquirer/prompts')

let meta = {
    value: 'Tomar 3 litros de água por dia',
    checked: false
}

let metas = [meta]

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta:"})
    
    if (meta.length == 0) {
        console.log("A meta não pode ser vazia.")
        return // Retorna para o while do menu, encerrando a função cadastrarMeta
        //return cadastrarMeta() // Retorna para a função cadastrarMeta até o usuario digitar algo
    }

    metas.push(
        {value: meta, checked: false}
    )
}

// Função para iniciar a aplicação
const start = async () => {    
    while (true) {

        const opcao = await select ({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch(opcao) {
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                console.log("Vamos listar")
                //console.log(metas)
                break
            case "sair":
                console.log("Até a próxima!")
                return
        }
    }
};

// Executa a função
start();