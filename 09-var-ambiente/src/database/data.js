async function connectData(user,password) {
    if (user === process.env.USERDATABASE && password === process.env.PASSWORDDATA) {
        console.log("Conectado com sucesso");
    }else{
        console.log("Senha ou user errados")
    }
}

export default connectData;