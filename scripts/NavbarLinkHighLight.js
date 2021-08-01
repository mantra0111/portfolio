const splittedUrl = document.location.href.split("/")
const currentLocation = splittedUrl[splittedUrl.length - 1]
const homeLink = document.querySelector('#home-link')

let activeLinkStyle = '0.2rem solid var(--active-text-dark)'

switch (currentLocation) {
    case '':
        homeLink.style.borderBottom = activeLinkStyle;
        break;
    case 'index.html':
        homeLink.style.borderBottom = activeLinkStyle;
        break;
    case 'index.html#projects':
        homeLink.style.borderBottom = activeLinkStyle;
        break;
    case '#projects':
        homeLink.style.borderBottom = activeLinkStyle;
        break;

    default:
        break;
}

