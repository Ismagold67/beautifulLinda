const bottonAfter = document.querySelector('[data-js="button-afte"]')
const showDiv = document.querySelector('[data-js="show-div"]')
const showedDiv = document.querySelector('.options-after-click')
const divOl = document.querySelector('.options-after-click ol')
const container = document.querySelector('.container-joia')
const buttonClose = document.querySelector('.options-after-click svg')
const liA = document.querySelectorAll('.lias')

var pageWidth = window.innerWidth

const resizeWindow = (widthOfWindow, classe) => {
    if (widthOfWindow <= 768) {
        if(classe.classList.contains('d-none')) {
            return classe.classList.remove('d-none')
        }
    } else {
        return classe.classList.add('d-none')
    }
}
resizeWindow(pageWidth, bottonAfter)
window.addEventListener('resize', () => {
    var pageWidth = window.innerWidth
    resizeWindow(pageWidth, bottonAfter)
    console.log(pageWidth)
    console.log(bottonAfter.classList.contains('d-none'))
})
showDiv.addEventListener('click', () => {
    showDiv.classList.add('d-none')
    container.classList.add('d-none')
    //showedDiv.classList.remove('d-none')
    showedDiv.style.display = 'flex'
})

buttonClose.addEventListener('click', () => {
    container.classList.remove('d-none')
    showDiv.classList.remove('d-none')
    //showedDiv.classList.add('d-none')
    showedDiv.style.display = 'none'
})

liA.forEach(clique => {
    clique.addEventListener('click', () => {
        container.classList.remove('d-none')
        showDiv.classList.remove('d-none')
        //showedDiv.classList.add('d-none')
        showedDiv.style.display = 'none'
    })
})


//console.log(bottonAfter.classList.contains('d-none'))
//const infoLeft = document.querySelector('.info-left')

// var pageWidth = window.innerWidth
// if (pageWidth < 950) {
//     if(bottonAfter.classList.contains('d-none')) {
//         bottonAfter.classList.remove('d-none')
//     }
// }
// else{
//     bottonAfter.classList.add('d-none')
// }
// console.log(pageWidth)