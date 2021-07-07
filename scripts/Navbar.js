const navbar = document.querySelector('.navbar-links-container')
// NAVBAR LOCATION HIGHLIGHT
// determine which link in inside the navbar should be highlighted with crimson color
const splittedUrl = document.location.href.split("/")
const currentLocation = splittedUrl[splittedUrl.length - 1]

// NAVBAR LINKS 
const homeLink = document.querySelector('#home-link')

// this controls the navbar styling to highlight the page the user 
// is currently in
switch (currentLocation) {
    case '':
        homeLink.style.borderBottom = '0.2rem solid crimson';
        break;
    case 'index.html':
        homeLink.style.borderBottom = '0.2rem solid crimson';
        break;
    case 'index.html#projects':
        homeLink.style.borderBottom = '0.2rem solid crimson';
        break;
    case '#projects':
        homeLink.style.borderBottom = '0.2rem solid crimson';
        break;

    default:
        break;
}


// OBSERVER EFFECTS
// I use the Hero section to be observed by the heroObserver
const heroSection = document.querySelector('.main-section')
// these are the headlines inside the hero text
const authorsName = document.querySelector('.authors-name')
const presentationText = document.querySelector('.presentation-text-hidden')


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
}, { threshold: 0.55 })

heroObserver.observe(heroSection)



document.onload = () => {
    if (window.innerWidth < 1000) {
        navbarLinksList.style.display = 'none'
    }
}