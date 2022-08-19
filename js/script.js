const inputText = document.querySelector(".input-text");
const outputText = document.querySelector(".output-text");
var tempImg = document.querySelector(".media-temp");
var copyButton = document.querySelector(".copyBtn");

function encryptBtn() {
    const encryptedText = encrypt(inputText.value);
    outputText.value = encryptedText;
    tempImg.style.display='none';
    outputText.style.display='flex';
    copyButton.style.display='inline-block';
}

function decryptBtn() {
    const decryptedText = decrypt(inputText.value);
    outputText.value = decryptedText;
    tempImg.style.display='none';
    outputText.style.display='flex';
    copyButton.style.display='inline-block';
}


function encrypt(encryptedString) {
    let matrizCod = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    encryptedString = encryptedString.toLowerCase();

    for (let i = 0; i < matrizCod.length; i++) {
        if (encryptedString.includes(matrizCod[i][0])) {
            encryptedString = encryptedString.replaceAll(matrizCod[i][0], matrizCod[i][1]);
        }
    }
    return encryptedString;
}

function decrypt(decryptedString) {
    let matrizCod = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    decryptedString = decryptedString.toLowerCase();

    for (let i = 0; i < matrizCod.length; i++) {
        if (decryptedString.includes(matrizCod[i][1])) {
            decryptedString = decryptedString.replaceAll(matrizCod[i][1], matrizCod[i][0]);
        }
    }
    return decryptedString;
}

function copyBtn(){
    navigator.clipboard.writeText(outputText.value);
}

// restringir a somente texto