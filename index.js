// Importação de plugins
var prompt = require('prompt-sync')()
const axios = require('axios')

// Declaração de variáveis
let cpf = ""

let idadeNova = ""

let error = ""

async function editUser(idadeNova, cpf) {   //Função de edição de dados em API simulada pelo Json Server
    try {
        await axios.patch(`http://localhost:3000/itens/${cpf}`, {
            idade: idadeNova
        })
    } catch(error) {
        console.log(error)

        return error
    }

    if(!error) {
        console.log("Sua idade foi atualizada!")
    }
    
    
}

function getData() {   //Função de obtenção dos dados do usuário
    console.log("Digite o seu CPF")
    cpf = prompt("")
    console.log("")
    console.log("Digite sua idade atualizada")
    idadeNova = prompt("")

    return cpf, idadeNova
}

// Execução das funções
getData()

editUser(idadeNova, cpf)