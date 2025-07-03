import {conctToData, desConctToData,dbType} from "./database.mjs";//usar mjs mostra q o arquivo é especificamente um modulo
import {} from "./"

console.log("Hellow ecma")
conctToData("CarlosData")
desConctToData("CarlosData")
console.log(dbType)