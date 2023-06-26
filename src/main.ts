import LevelBar from "./LevelBar.js";
import scrollingAnimation from "./scrollingAnimation.js";
import ProjectCard from "./projects/ProjectCard";
import revealAnimationForElements, {revealAnimation} from "./revealAnimation.js";
import ToGet from "./ToGet.js";
import SchoolsDiploma from "./schools/SchoolsDiploma.js";
import SchoolsInfo from "./schools/SchoolsInfo.js";

const projects = document.querySelectorAll<ProjectCard>("project-card");

customElements.define('level-bar', LevelBar);
customElements.define('project-card', ProjectCard);
customElements.define('to-get', ToGet);

customElements.define('schools-diploma', SchoolsDiploma);
customElements.define('schools-info', SchoolsInfo);

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
