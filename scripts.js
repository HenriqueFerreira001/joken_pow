const optionsimage = document.querySelectorAll(".option-image")
const container = document.querySelector(".container")
const resultText = document.querySelector(".result-text")
const computerResult = document.querySelector(".computer-result img")
const userResult = document.querySelector(".user-result img")

const computerSrcImages = ['./img/pedra.png', './img/papel.png', './Img/tesoura.png']

const winner = {
    RR: "empate",
    RP: "computador",
    RS: "voce",
    PP: "Empate",
    PR: "Computador",
    PS: "Empate",
    SS: "empate",
    SR: "Computador",
    SP: "Voce"
}


function handleOptionClick(event) {
    const clickedimage = event.currentTarget

    const clikedIndex = Array.from(optionsimage).indexOf(clickedimage)



    container.classList.add("Start")
    resultText.textContent = "..."

    userResult.src = computerResult.src = computerSrcImages[0]

    setTimeout(() => {
        container.classList.remove("Start")

        userResult.src = computerSrcImages[clikedIndex]

        const randomNumber = Math.floor(Math.random() * computerSrcImages.length)
        computerResult.src = computerSrcImages[randomNumber]

        const computerimagessrc = computerSrcImages[randomNumber]

        const uservalue = ['R', 'P', 'S'][clikedIndex]
        const computervalue = ['R', 'P', 'S'][randomNumber]
        const usercomputerResult = uservalue + computervalue
        const finalResult = winner[usercomputerResult]




        resultText.textContent = uservalue === computervalue ? ' Empate' : finalResult + ' Ganhou'

    }, 2000);
}

optionsimage.forEach(img => {
    img.addEventListener("click", handleOptionClick)

})

