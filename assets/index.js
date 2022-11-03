import LevelBar from "./LevelBar.js";
import scrollingAnimation from "./scrollingAnimation.js";
import ProjectCard from "./ProjectCard.js";
import revealAnimationForElements from "./revealAnimation.js";
const projects = document.querySelectorAll(".project-card");
customElements.define('level-bar', LevelBar);
customElements.define('project-card', ProjectCard);
scrollingAnimation();
if (projects != null && projects.length > 0) {
    revealAnimationForElements(projects);
}
//# sourceMappingURL=index.js.map