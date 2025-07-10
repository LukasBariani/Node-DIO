import prompt from "prompt";
import promptSchemaQrCode from "../../prompts-schemas/prompt-schema-qrcode.js";
import handler from "./handle.js";

async function createQrCode(params) {
    prompt.get(promptSchemaQrCode, handler)
}

export default createQrCode;