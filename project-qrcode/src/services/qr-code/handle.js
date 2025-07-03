import chalk from "chalk";
import qr from "qrcode-terminal"

async function handler(err, result){
    if (err) {
        console.log("error on application");
        return;1
        
    }
    const isSmall = result.type == 2;
    qr.generate(result.link, {small: isSmall}, (qrcode)=>{
        console.log(chalk.green("QR CODE GERADO COM SUCESSO\n"))
        console.log(qrcode)
    })
}

export default handler;