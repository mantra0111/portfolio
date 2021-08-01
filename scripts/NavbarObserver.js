const navbar = document.querySelector('.navbar-links-container')
// OBSERVER EFFECTS
// I use the Hero section to be observed by the heroObserver
const heroSection = document.querySelector('.main-section')
// these are the headlines inside the hero text
const authorsName = document.querySelector('.authors-name')
const presentationText = document.querySelector('.presentation-text-hidden')
const hamburgerButton = document.querySelector('#hamburger')

const heroObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navbar.classList.remove('navbar-links-container-scrolled');
            presentationText.classList.remove('presentation-text-hidden');
            presentationText.classList.add('presentation-text-visible');
            authorsName.style.color = 'crimson'
            hamburgerButton.style.color = "var(--active-text-light)"
            return
        }
        hamburgerButton.style.color = "var(--active-text-dark)"
        navbar.classList.add('navbar-links-container-scrolled');
        presentationText.classList.add('presentation-text-hidden');
        presentationText.classList.remove('presentation-text-visible');
    })
}, { threshold: 0.55 })

heroObserver.observe(heroSection)

