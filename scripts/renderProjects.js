const imageUrls = [
    "./images/dex-min.PNG",
    "./images/gym-responsive-min.PNG"]


// name 
const projects = [
    {
        projectName: "Quiz application",
        mediaLocation: "./images/quizz-app.PNG",
        repoURL: "https://github.com/mantra0111/front-code-challenge",
        demoURL: "https://mantra0111.github.io/front-code-challenge/#/",
        cardColor: "crimson",
        description: "Made with react and bootstrap this application lets you respond a random 11 question quiz",
    },
    {
        projectName: "React ecommerce",
        mediaLocation: "./images/react-ecommerce.PNG",
        repoURL: "https://github.com/mantra0111/ecommerce-example",
        demoURL: "https://mantra0111.github.io/ecommerce-example/#/",
        cardColor: "crimson",
        description: "using a node.js api and react to display the products and create an ecommerce experience for the user",
    },
    {
        projectName: "React pokedex",
        mediaLocation: "./images/dex-min.PNG",
        repoUrl: "https://github.com/mantra0111/pokedex",
        demoUrl: "https://mantra0111.github.io/pokedex/#/",
        cardColor: "crimson",
        description: "Using a thir party api, this react pokedex can display data for 151 different pokemons"
    },
    {
        projectName: "Gym landing page",
        mediaLocation: "./images/gym-min.PNG",
        repoUrl: "https://github.com/mantra0111/gym-landing-page",
        demoUrl: "https://mantra0111.github.io/gym-landing-page/",
        cardColor: "crimson",
        description: "A landing page made for a gym using html, css and javascript"
    },

]


const makeProjectCard = ({ imgUrl,
    projectName,
    projectRepo,
    projectDemo,
    cardColor,
    projectDescription }) => {
    const cardTemplate = `
        <div class="project-card">
            <img class="project-media" src=${imgUrl}>
            <div class="project-info" style="background-color: ${cardColor};"> 
                <h1 class="project-info-title">${projectName}</h1>
                <p class="project-info-description"> ${projectDescription} </p>
                <div class="project-links-container" >
                <a href="${projectDemo}" target="_blank">Live Demo</a>
                <a href="${projectRepo}" target="_blank">Repo</a>
                
                </div>
            </div>
        </div>`
    return cardTemplate
}

const projectSection = document.querySelector('.project-section')

function render() {
    projects.forEach((project) => {
        projectSection.innerHTML +=
            makeProjectCard({
                imgUrl: project.mediaLocation,
                projectName: project.projectName,
                projectDemo: project.demoURL,
                projectRepo: project.repoURL,
                cardColor: project.cardColor,
                projectDescription: project.description,
            })
    })
}

render()

// here we manage the hover effects

