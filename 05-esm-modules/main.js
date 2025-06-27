import {conctToData, desConctToData,dbType} from "./src/utils/database.mjs";//usar mjs mostra q o arquivo é especificamento um modulo
import {getDataFromApi} from "./src/utils/api.js"

console.log("Hellow ecma")
conctToData("CarlosData")
desConctToData("CarlosData")
console.log(dbType)
getDataFromApi()