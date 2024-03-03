const passwordEl = document.querySelector("#password")
const numberLength = 15

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const digits = "0123456789"
const specialSymbols = "@#$%^&*()_+=?/|.{}[]~"


const charGen = upperCase + lowerCase + digits + specialSymbols



function PasswordCreator(){
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += digits[Math.floor(Math.random() * digits.length)]
    password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)]


    while(numberLength > password.length){
        password += charGen[Math.floor(Math.random() * charGen.length)]

    }
        passwordEl.value = password

}


function copyPassword() {
    passwordEl.select()
    document.execCommand("copy")
}