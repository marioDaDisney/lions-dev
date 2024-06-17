const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

//menu com opções
//tema personagens de brawl stars

let brawlers = []

exibirMenu()

function exibirMenu() {

    console.log(`
    Menu:
    1. Cadastrar Brawler
    2. Lista de Brawlers
    3. Maior nivel de poder
    4. Maior raridade
    5. Quais tem hiper carga
    6. Sair
    
    `)

    rl.question('escoha uma opção:', (opcao) => {
        switch (opcao) {
            case '1':
                cadastro()
                break
            case '3':
                nPoder()
                break
            case '4':
                raridade()
                break
            case '5':
                hiperCarga()
                break
            case '2':
                lista()
                break
            case '6':
                rl.close()
                break
            default:
                console.log("Opção não encontrada tente novamente")
                exibirMenu()
                break
        }
    })
}

function cadastro() {
    rl.question('Qual o nome deste Brawler? ', (nome) => {
        rl.question('Qual seu nivel de poder em sua conta? ', (poder) => {
            rl.question('Ele tem hiper carga no jogo? ', (carga) => {
                rl.question('Qual sua raridade? ', (rare) => {
                    rl.question('Qual classe dele em sua conta? ', (classe) => {
                        brawlers.push({ nome: nome, Nivel: parseInt(poder), HiperCarga: carga, Raridade: rare, Classe: parseInt(classe)})
                        console.log(`
                        Cadastro do Brawler completo!

                        `)
                        exibirMenu()
                    })
                })
            })
        })
    })
}

function lista() {
    if (brawlers !=0) {
        console.log(brawlers)
    } else {
        console.log(`
Não à Brawlers listados! Cadastre um Brawler.`)
		console.log(`
		1. Cadastrar Brawler
		2. Voltar ao menu
		3. Sair
		`)

		rl.question('Escolha uma opção: ', (opcao) => {
			switch (opcao) {
				case '1':
					cadastro()
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
    }
}

function  nPoder(){
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
