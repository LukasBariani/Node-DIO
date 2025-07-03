import handlePass from "./handlePass.js";
import chalk from "chalk";

async function createPassword(params) {
    console.log(chalk.greenBright("SENHA"))
    const password = await handlePass();
    console.log(password);
    
}
export default createPassword