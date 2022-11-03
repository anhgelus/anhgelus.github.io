import LevelBar from "./LevelBar.js";
import scrollingAnimation from "./scrollingAnimation.js";
import ProjectCard from "./ProjectCard.js";
import revealAnimationForElements, {revealAnimation} from "./revealAnimation.js";

const projects = document.querySelectorAll<ProjectCard>("project-card");

customElements.define('level-bar', LevelBar);
customElements.define('project-card', ProjectCard);

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
