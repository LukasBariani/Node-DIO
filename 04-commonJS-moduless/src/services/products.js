//all functions for products
async function getFullName(codeId, productName) {
    await doBreakLine()
    console.log("Produto: " + codeId + "---" + productName)
}



async function  getUrl(apiUrl) {
    console.log(apiUrl)
}

//hidden function (noa é exportada mas faz parte doo é)
async function doBreakLine() {
    console.log("\n ---quebrei a linha--- \n")
}

async function getProductLabel(productName) {
    console.log(productName) 
}

const productType = {
    version: "Digital",
    tax: "tx1"
}

module.exports = {
    getFullName,
    getProductLabel,
    productType,
    getUrl,
};