import permittedCharacters from "./utils/permitted-characters.js";

async function handle() {
    let characters = [];
    let password = "";

    const passwordLength = process.env.PASSWORD_LENGTH;
    characters = await permittedCharacters();

    for (let i = 0; i < passwordLength; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    return password;
}

export default handle;