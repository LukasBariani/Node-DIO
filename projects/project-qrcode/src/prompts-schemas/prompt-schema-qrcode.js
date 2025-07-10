import chalk from "chalk";

const promptSchemaQrCode = [
    {
    name: "link",
    description:  chalk.yellow.bold("Digite o link para gerar o QR CODE)"),
    required: true
    },
    {
        name: "type",
        description:  chalk.yellow.bold("Escolha entre o tipo de QR CODE (1- Normal  (2- Terminal )"),
        pattern: /^[1-2+$]/,
        message: chalk.red.italic("Escolha entre 1 e 2"),
        required: true
    }
]
export default promptSchemaQrCode;