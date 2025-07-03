import connectData from "./database/data.js";

(async function main(params) {
    console.log(process.env.USERDATABASE)
    await connectData(process.env.USERDATABASE, process.env.PASSWORDATA)
})()