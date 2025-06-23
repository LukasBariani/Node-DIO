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

(async function main() {
    console.log(`🏁🚦Começando entre ${mario.getName()} e ${luigi.getName()}...`)
})();