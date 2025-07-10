async function getBaseEmail(sendername:string): Promise<string> {
    let base = await getNeaderText()

    base += `olá ${sendername}, quero me increver no DIO`

    base += " estou deixando meu curriculo"

    return base;

}

async function getNeaderText(): Promise<string>  {
    return "Email para voçê\n"
}

export {getBaseEmail}