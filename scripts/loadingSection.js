let loadingSection = document.querySelector("#loading-section");

function hideLoadingSection() {
    setTimeout(() => {
        //loadingSection.style.transform = "scale(0)";
        loadingSection.style.top = '150vh'
    }, 800)
}

document.onload = hideLoadingSection()
