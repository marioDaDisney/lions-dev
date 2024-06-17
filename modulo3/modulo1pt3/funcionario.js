const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []

exibirMenu()

function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastrar Funcionário
	2. Lista Funcionário
        3. maior salário
	4. Sair

	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
            case '2':
                listaFuncionario()
                break
			case '3':
				maiorSalario()
			case '4':
				rl.close()
				break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

cadastrarFuncionario()

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat(salario) })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}


function listaFuncionario() {
   if (funcionarios == 0) {
	console.log("Não á funcionários listados!")
   } else {
	console.log(funcionarios)
   }
   exibirMenu()
}
 
maiorSalario()
let salarioA = funcionarios[0]

function maiorSalario() {
	for (let i =0 ; i < funcionarios.length ; i++) {
		if (funcionarios.salario[i] > salarioA.salario) {
			salarioA = funcionarios[i]
		}
	}
}