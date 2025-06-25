class player {
  constructor(name, velocidade, manobra, poder) {
    this.name = name;
    this.velocidade = velocidade;
    this.manobra = manobra;
    this.poder = poder;
    this.pontos = 0;
  }
  getName() {
    return this.name;
  }
}

const mario = new player("Mario", 4, 3, 3);
const bauser = new player("Bowser", 3, 4, 4);
const Peach = new player("Peach", 3, 4, 2);
const luigi = new player("Luigi", 3, 4, 4);
const ioshi = new player("Mario", 4, 3, 3);

async function rolaDado() {
  const dado = Math.floor(Math.random() * 6) + 1;
  return dado;
}

async function getRandomBloc() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
      break;
  }
  return result;
}

//function to make the result of the blocks and attributes of players
async function logRollResult(playerName, bloc, diceRes, attribute) {
  console.log(`${playerName} rolou um dado de ${bloc}: ${attribute} + ${diceRes} = ${attribute+diceRes}`);
}

async function playRaceEngine(player1, player2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`rodada ${round}--------------------------------`);

    //sortear bloco
    let bloc = await getRandomBloc();
    console.log(`Bloco: ${bloc}`);

    //roll dice
    let dice1 = await rolaDado();
    let dice2 = await rolaDado();

    let totalSkill1 = 0;
    let totalSkill2 = 0;

    if (bloc === "RETA") {
      totalSkill1 = dice1 + player1.velocidade;
      totalSkill2 = dice2 + player2.velocidade;

      await logRollResult(
        player1.name,
        "VELOCIDADE",
        dice1,
        player1.velocidade
      );

      await logRollResult(
        player2.name,
        "VELOCIDADE",
        dice2,
        player2.velocidade
      );

            if (totalSkill1 > totalSkill2) {
            console.log(`Jogador ${player1.name} marcou 1 ponto!`)
            player1.pontos++
        } else if(totalSkill1 < totalSkill2){
            console.log(`Jogador ${player2.name} marcou 1 ponto!`)
            player2.pontos++
        } else {
            console.log("EMPATE")
        }
    }

    if (bloc === "CURVA") {
      totalSkill1 = dice1 + player1.manobra;
      totalSkill2 = dice2 + player2.manobra;

      await logRollResult(player1.name,
        "CURVA",
        dice1,
        player1.manobra
        );

      await logRollResult(player2.name, 
        "CURVA",
        dice2,
        player2.manobra
        );
                if (totalSkill1 > totalSkill2) {
            console.log(`Jogador ${player1.name} marcou 1 ponto!`)
            player1.pontos++
        } else if(totalSkill1 < totalSkill2){
            console.log(`Jogador ${player2.name} marcou 1 ponto!`)
            player2.pontos++
        } else {
            console.log("EMPATE")
        }
    }

    if (bloc === "CONFRONTO") {
      let powerResult1 = dice1 + player1.poder;
      let powerResult2 = dice2 + player2.poder;

      console.log(`${player1.name} confrontou ${player2.name}`)

       await logRollResult(player1.name,
        "PODER",
        dice1,
        player1.poder
        );

      await logRollResult(player2.name, 
        "PODER",
        dice2,
        player2.poder
        );


        if (powerResult1 > powerResult2 && player2.pontos > 0 ) {
            console.log(`${player1.name} venceu o confronto! ${player2.name} perdeu um ponto`)
            player2.pontos--
        }
        if (powerResult1 < powerResult2 && player1.pontos > 0 ) {
            console.log(`${player2.name} venceu o confronto! ${player1.name} perdeu um ponto`)
            player1.pontos--
        }
        
        console.log(powerResult1 === powerResult2? "CONFRONTO EMPATADO" : "")
    }
  }

}
async function setWinner(player1, player2) {
    console.log("                                           ")
    console.log("Resultado final")
    console.log(`${player1.name}: ${player1.pontos}  ponto(s)`)
    console.log('********************************************')
    console.log(`${player2.name}: ${player2.pontos}  ponto(s)`)
    if (player1.pontos > player2.pontos) {
        console.log(`${player1.name} GANHOU A CORRIDA!!!!`)
    }
    else if (player1.pontos < player2.pontos) {
        console.log(`${player2.name} GANHOU A CORRIDA!!!!`)
    }else{
        console.log("EMPATE")
    }
}

(async function main() {
  console.log(`🏁🚦Começando entre ${mario.getName()} e ${luigi.getName()}...`);

  await playRaceEngine(mario, luigi);
  setWinner(mario,luigi)
})();
