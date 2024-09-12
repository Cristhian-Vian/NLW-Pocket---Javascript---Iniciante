const { select, input, checkbox } = require('@inquirer/prompts')

let meta = {
    value: 'Tomar 3 litros de água por dia',
    checked: false
}

// Função para cadastrar as metas
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

// Função para listar as metas
const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as Setas para mudar de meta, o Espaço para marcar ou desmarcar e o Enter para finalizar essa etapa.",
        choices: [...metas],
        instructions: false // para desabilitar as instruções default do console em inglês
    })

    if (respostas.length == 0) {
        console.log("Nenhuma meta selecionada!")
        return
    }

    // Função para alterar o valor de checked para False nas metas não marcadas como concluidas
    metas.forEach((m) => {
        m.checked = false
    })

    // Função para alterar o valor de checked para True nas metas que foram marcadas como concluidas
    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    console.log("Meta(s) marcada(s) como concluída(s)")
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
                await listarMetas()
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