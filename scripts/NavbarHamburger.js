//HAMBURGER BUTTON IS DECLARED ON THE NavbarObserver.js

const navbarLinksList = document.querySelector('.navbar-links-list')

let isOpen

const openHamburger = () => {
    isOpen = true
    navbarLinksList.style.display = 'flex'
}

const closeHamburger = () => {
    isOpen = false
    navbarLinksList.style.display = 'none'
}

if (window.innerWidth <= 800) {
    closeHamburger()
} else {
    openHamburger()
}

hamburgerButton.addEventListener('click', () => {
    if (isOpen) {
        closeHamburger()
        return
    }
    openHamburger()
})

window.onresize = () => {
    if (window.innerWidth <= 800) {
        closeHamburger()
        return
    }
    openHamburger()
}

