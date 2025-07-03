import permittedChar from "./utils/permittedChar.js"
async function handlePass(params) {
    let characters = await permittedChar()
    let password = ""
    const passwordLenght = process.env.PASSWORD_LENGHT
    for (let index = 0; index < passwordLenght; index++) {
        const i = Math.floor(Math.random() * characters.length)
        password += characters[i];
    }
    return password
}

export default handlePass