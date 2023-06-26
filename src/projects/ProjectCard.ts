export default class ProjectCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const content = this.innerHTML
        const title = this.getAttribute('title');
        const href = this.getAttribute('href');
        const image = this.getAttribute('image-src');
        let alt = this.getAttribute('image-alt');
        if (alt === null) {
            alt = "Representation of the project";
        }

        this.innerHTML = `<div class="card">
            <div class="card-header">
                <img class="card-image" src="${image}" alt="${alt}">
            </div>
            <div class="card-content">
                <h4 class="is-5 card-title"><a href="${href}" class="is-green" target="_blank">${title}</a></h4>
                <div class="card-description">${content}</div>
            </div>
        </div>`;
    }
}