import LevelBar from "./LevelBar.js";
import scrollingAnimation from "./scrollingAnimation.js";
import ProjectCard from "./ProjectCard.js";
import revealAnimationForElements, { revealAnimation } from "./revealAnimation.js";
import ToGet from "./ToGet.js";
const projects = document.querySelectorAll("project-card");
customElements.define('level-bar', LevelBar);
customElements.define('project-card', ProjectCard);
customElements.define('to-get', ToGet);
scrollingAnimation();
if (projects != null && projects.length > 0) {
    revealAnimationForElements(projects);
}
function reveal(e) {
    if (e != null) {
        revealAnimation(e);
    }
}
reveal(document.getElementById("about"));
reveal(document.getElementById("contact"));
//# sourceMappingURL=index.js.map