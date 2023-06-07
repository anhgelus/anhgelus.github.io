export default class SchoolsInfo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const type = this.getAttribute("type")!;
        const name = this.getAttribute("name")!;
        const city = this.getAttribute("city")!;
        this.classList.add("schools", "schools-info");
        this.innerHTML = `
        <h4 class="title">${type} - ${name}</h4>
        <h5 class="subtitle">${city}</h5>
        `;
    }
}