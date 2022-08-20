import LevelBar from "./LevelBar.js";
customElements.define('level-bar', LevelBar);
const links = document.querySelectorAll('a');
const regexBlank = /^https:\/\//;
links.forEach(link => {
    regexBlank.test(link.href) ? link.target = '_blank' : link.target = '_self';
});
//# sourceMappingURL=index.js.map