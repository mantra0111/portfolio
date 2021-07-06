// I use the Hero section to be observed by the heroObserver
const heroSection = document.querySelector('.main-section')


const navbar = document.querySelector('.navbar-links-container')
// these are the headlines inside the hero text
const authorsName = document.querySelector('.authors-name')
const presentationText = document.querySelector('.presentation-text-hidden')


// determine which link in inside the navbar should be highlighted with crimson color
const splittedUrl = document.location.href.split("/")
const currentLocation = splittedUrl[splittedUrl.length - 1]


// these are the links inside the navbar 

const homeLink = document.querySelector('#home-link')

switch (currentLocation) {
    case 'index.html':
        homeLink.style.color = 'crimson'
        break;

    default:
        break;
}

const heroObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navbar.classList.remove('navbar-links-container-scrolled');
            presentationText.classList.remove('presentation-text-hidden');
            presentationText.classList.add('presentation-text-visible');
            authorsName.style.color = 'crimson'

            return
        }

        navbar.classList.add('navbar-links-container-scrolled');
        presentationText.classList.add('presentation-text-hidden');
        presentationText.classList.remove('presentation-text-visible');
    })
}, { threshold: 0.4 })

heroObserver.observe(heroSection)