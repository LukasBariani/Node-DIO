const dbType = {
    userType: "admin",
    typeData: "datalocal",
}


async function conctToData(dataName) {
    //logica de conexao
    console.log(`conectado ao banco ${dataName}`)
}
async function desConctToData(dataName) {
    //logica de conexao
    console.log(`desconectando ao banco ${dataName}`)
}

export {conctToData, desConctToData, dbType} // exportacao por objeto

// module.exports = {
//     conctToData,
//     desConctToData,
// }