const imageUrls = [
    "./images/dex-min.PNG",
    "./images/gym-responsive-min.PNG"]


// name 
const projects = [
    {
        projectName: "React pokedex",
        mediaLocation: "./images/dex-min.PNG",
        sourceCodeLink: "https://github.com/mantra0111/pokedex",
        demoLink: "https://mantra0111.github.io/pokedex/#/",
        cardColor: "",
    },
    {
        projectName: "Gym landing page",
        mediaLocation: "./images/gym-responsive-min.PNG",
        sourceCodeLink: "https://github.com/mantra0111/gym-landing-page",
        demoLink: "https://mantra0111.github.io/gym-landing-page/",
        cardColor: "",
    },
]


const makeProjectCard = ({ imgUrl, projectName }) => {
    const cardTemplate = `
        <li class="project-card">
            <img class="project-media" src=${imgUrl}>
            <div class="project-info"> ${projectName} </div>
        </li>`
    return cardTemplate
}

const projectListContainer = document.querySelector('.masonry-gallery')

function render() {
    projects.forEach((project) => {
        projectListContainer.innerHTML +=
            makeProjectCard({
                imgUrl: project.mediaLocation,
                projectName: project.projectName
            })
    })
}

