import {Project} from "./parser";

export class ProjectsList extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const href = this.getAttribute('href')!!;
        const projects: Project[] = await fetch(`${window.location.origin}/content/${href}`).then(r => r.json()).then(r => r.content);
        let content = ""
        for (let i = 0; i < projects.length; i++) {
            const project = projects[i];
            content += `<project-card title="${project.name}" href="${project.link}" image-src="${project.image}" image-alt="${project.alt}">`
            content += `<to-get name="projects/${project.content}" simple="yes"></to-get>`;
            content += `<project-content>`;
        }
        this.innerHTML = content;
    }
}