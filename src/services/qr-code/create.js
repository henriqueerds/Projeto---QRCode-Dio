import prompt from 'prompt';
import promptQRCode from '../../prompts-schema/prompt-qrcode.js';
import handle from './handle.js';1

async function createQRCode() {
    prompt.get(promptQRCode, handle);
    prompt.start();
}

export default createQRCode;