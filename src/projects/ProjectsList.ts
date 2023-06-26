import {Project} from "./parser";

export class ProjectsList extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const href = this.getAttribute('href')!!;
        const projects: Project[] = await fetch(`${window.location.origin}/content/${href}`)
            .then(r => r.json());
        let content = '<div class="project-list">'
        for (let i = 0; i < projects.length; i++) {
            const project = projects[i];
            content += `<project-card title="${project.title}" href="${project.link}" image-src="${project.image}" image-alt="${project.alt}">`
            content += `<to-get name="projects/${project.content}" simple="yes"></to-get>`;
            content += `</project-card>`;
        }
        this.innerHTML = content + "</div>";
    }
}