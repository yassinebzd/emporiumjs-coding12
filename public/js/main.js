

let body = document.getElementsByTagName("body")[0];

//================ Navbar ====================//

let navbar = document.getElementsByTagName("nav")[0];

window.addEventListener('scroll', () => {
    if (window.scrollY >= 184) {
        navbar.classList.add('fixed-top')
    } else if(window.scrollY < 184) {
        navbar.classList.remove('fixed-top')
    }
})
//==============================================


//============= Modal ================//

let connexion = document.getElementsByClassName("btn-success")[0]
let modal = document.getElementById("modal")

connexion.addEventListener('click', () => {
    modal.classList.remove('d-none')
})
let cross = document.getElementsByClassName("fas fa-times")[0]
cross.addEventListener('click', () =>{
    modal.classList.add('d-none')
})


//================== Body =================//
let h1 = document.getElementsByClassName('emporium.')
let white = document.getElementsByClassName("btn-blanc")[0]
let black = document.getElementsByClassName("btn-noir")[0]
let superman = document.getElementById('superman')
let colonne1 = document.getElementsByClassName('col-lg-4 col-sm-12 my-4 p-5 text-white')[0]
let colonne2 = document.getElementsByClassName('col-lg-4 col-sm-12 my-4 p-5 text-white')[1]
let colonne3 = document.getElementsByClassName('col-lg-4 col-sm-12 my-4 p-5 text-white')[2]

white.addEventListener('click', () =>{
    document.querySelector('nav').classList.remove('bg-noir')
    document.querySelector('nav').classList.add('bg-white')
    body.style.backgroundColor = "white"
    body.style.color = "black"
    superman.style.color = 'black'
    colonne1.style.border = 'solid 5px white'
    colonne2.style.border = 'solid 5px white'
    colonne3.style.border = 'solid 5px white'

})
black.addEventListener('click', () =>{
    document.querySelector('nav').classList.add('bg-noi')
    document.querySelector('nav').classList.remove('bg-white')
    body.style.backgroundColor = "black"
    body.style.color = "white"
    superman.style.color = 'white'
    colonne1.style.border = 'solid 5px black'
    colonne2.style.border = 'solid 5px black'
    colonne3.style.border = 'solid 5px black'
  
})
//================= caroussel ===================//
let carousselBoutons = document.querySelectorAll('i.fa-circle')
let caroussel = document.querySelectorAll('div.caroussel')
carousselBoutons[0].addEventListener('click',()=>{
    for (let i = 0; i < 8; i++) {
        caroussel[i].classList.add('d-none')
        if (i == 0 || i == 1 || i ==2 || i == 3) {
            caroussel[i].classList.remove('d-none')
        }
    }
})
carousselBoutons[1].addEventListener('click',()=>{
    for (let i = 0; i < 8; i++) {
        caroussel[i].classList.add('d-none')
        if (i == 2 || i == 3 || i ==4 || i == 5) {
            caroussel[i].classList.remove('d-none')
        }
    }
})
carousselBoutons[2].addEventListener('click',()=>{
    for (let i = 0; i < 8; i++) {
        caroussel[i].classList.add('d-none')
        if (i == 4 || i == 5 || i ==6 || i == 7) {
            caroussel[i].classList.remove('d-none')
        }
    }
})