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
	1. Cadastrar funcionário
    	2. Lista de funcionários
    	3. Maior salario
	4. Sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
            case '2':
                listaF()
                break
            case '3':
                maiorS()
				break
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

function listaF() {
	if (funcionarios == 0) {
		console.log("não à funcionários listados! Cadastre um funcionario.")
		console.log(`
		1. Cadastrar funcionário
		2. Voltar ao menu
		3. Sair
		`)

		rl.question('Escolha uma opção: ', (opcao) => {
			switch (opcao) {
				case '1':
					cadastrarFuncionario()
					break
				case '2':
					exibirMenu()
					break
				case '3':
					rl.close()
					break
				default:
					console.log('Opção inválida, tente novamente.')
					exibirMenu()
					break
			}
		})

	} else {
		console.log(funcionarios)
		exibirMenu()
	}
}

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: salario })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}

function maiorS() {
	if(funcionarios.length == 0) {
		console.log("não à funcionários cadastrados! Cadastre um funcionario.")
		console.log(`
		1. Cadastrar funcionário
		2. Voltar ao menu
		3. Sair
		`)

		rl.question('Escolha uma opção: ', (opcao) => {
			switch (opcao) {
				case '1':
					cadastrarFuncionario()
					break
				case '2':
					exibirMenu()
					break
				case '3':
					rl.close()
					break
				default:
					console.log('Opção inválida, tente novamente.')
					exibirMenu()
					break
			}
		})

	} else {

		let Salu = []
		Salu.push(funcionarios[0])

		for (let i = 0; i < funcionarios.length	; i++) {
			if(funcionarios[i].salario > Salu[0].salario) {

				Salu.splice(0,1)

				Salu.push(funcionarios[i])
			} 
		}
		console.log(`Funcionário com maior salário:
        Nome: ${Salu[0].nome}
        Cargo: ${Salu[0].cargo}
        Salário: R$${Salu[0].salario}`)	

        exibirMenu()
	}
	
}

