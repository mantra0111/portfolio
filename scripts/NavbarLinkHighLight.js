const splittedUrl = document.location.href.split("/")
const currentLocation = splittedUrl[splittedUrl.length - 1]
const homeLink = document.querySelector('#home-link')

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

