import prompt from "prompt"
import promptMain from './prompts-schemas/prompt-schema-main.js';
import createQrCode from "./services/qr-code/createqr.js";
import createPassword from "./services/password/createPass.js";

(async function main() {
  prompt.get(promptMain, async (err, choice) => {
    if(choice.select == 1) await createQrCode();
    if(choice.select == 2) await createPassword();

        prompt.start();
  })
})()