let countChar = 300

let span = document.querySelector("#section-contato-maxchar span")
let textarea = document.querySelector("form textarea")
span.textContent = countChar

textarea.addEventListener("keypress", () => {
    
    if (textarea.value.length > 0 && textarea.value.length < 300) {
        --countChar;
        span.textContent = countChar
    }
})