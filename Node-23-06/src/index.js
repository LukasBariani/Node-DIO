class player {
    constructor(name,velocidade,manobra,poder){
        this.name = name
        this.velocidade = velocidade
        this.manobra = manobra
        this.poder = poder
        let pontos = 0
    }
    getName(){
        return this.name
    }
}

const mario = new player("Mario", 4, 3,3) 
const bauser = new player("Bowser", 3, 4,4) 
const Peach = new player("Peach", 3, 4,2) 
const luigi = new player("Luigi", 4, 3,3) 
const ioshi = new player("Mario", 4, 3,3) 

async function rolaDado() {
    const dado = Math.floor(Math.random() * 6) + 1 
    return dado
}

async function getRandomBloc(){
    let random = Math.random()
    let result 

    switch (true) {
        case random < 0.33:
            result = "reta"
            break;
        case random < 0.66: 
            result = "curva"
            break;
        default:
            result ="confronto"
            break;
    }
    return result
}

async function playRaceEngine(player1,player2) {
    for(let round = 1; round <= 5; round++){
        console.log(`rodada ${round}`)

        //sortear bloco 
        let bloc = await getRandomBloc()
        console.log(`Bloco: ${bloc}  sorteado`)
    }

    //roll dice

    let dice1 = await rolaDado()
    let dice2 = await rolaDado()

    let totalSkill1 = 0 
    let roralSkill2 = 0 
}



(async function main() {
    console.log(`🏁🚦Começando entre ${mario.getName()} e ${luigi.getName()}...`)

    await playRaceEngine(mario, luigi)
})();