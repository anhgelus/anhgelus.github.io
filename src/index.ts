import LevelBar from "./LevelBar.js";
import scrollingAnimation from "./scrollingAnimation.js";
import ProjectCard from "./ProjectCard.js";

customElements.define('level-bar', LevelBar);
customElements.define('project-card', ProjectCard);

scrollingAnimation();
