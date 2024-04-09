import LevelBar from "./LevelBar.js";
import scrollingAnimation from "./scrollingAnimation.js";
import ProjectCard from "./projects/ProjectCard.js";
import revealAnimationForElements, {revealAnimation} from "./revealAnimation.js";
import ToGet from "./ToGet.js";
import SchoolsDiploma from "./schools/SchoolsDiploma.js";
import SchoolsInfo from "./schools/SchoolsInfo.js";
import {ProjectsList} from "./projects/ProjectsList.js";
import LegalFrench from "./legal/french.js";
import LegalEnglish from "./legal/english.js";

const projects = document.querySelectorAll<ProjectCard>("project-card");

customElements.define('level-bar', LevelBar);
customElements.define('project-card', ProjectCard);
customElements.define('to-get', ToGet);
customElements.define('projects-list', ProjectsList);

customElements.define('schools-diploma', SchoolsDiploma);
customElements.define('schools-info', SchoolsInfo);

customElements.define('legal-french', LegalFrench);
customElements.define('legal-english', LegalEnglish);

scrollingAnimation();
if (projects != null && projects.length > 0) {
    revealAnimationForElements(projects);
}

function reveal(e: HTMLElement|null) {
    if (e != null) {
        revealAnimation(e);
    }
}
reveal(document.getElementById("about"));
reveal(document.getElementById("contact"));
reveal(document.getElementById("schools"));

function showLegal(hash: string) {
    const content = document.getElementById("content")!
    if (hash.endsWith("-fr")) {
        content.innerHTML = "<legal-french></legal-french>"
    } else if (hash.endsWith("-en")) {
        content.innerHTML = "<legal-english></legal-english>"
    }
    document.getElementById("header")!.innerHTML = ""
}

if (window.location.hash.startsWith("#legal")) {
    showLegal(window.location.hash)
}

document.querySelectorAll("a").forEach((e) => {
    const anchor = e as HTMLAnchorElement
    if (anchor.href.includes(("#legal"))) {
        console.log(anchor)
        anchor.addEventListener("click", () => {
            showLegal(anchor.href.split("#")[1])
            window.scrollTo({top: 0, behavior: 'smooth'})
        })
    }
})
