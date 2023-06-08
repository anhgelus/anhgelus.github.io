export default class SchoolsInfo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const type = this.getAttribute("type")!;
        const name = this.getAttribute("name")!;
        const city = this.getAttribute("city")!;
        this.classList.add("schools", "schools-info");
        if (this.innerHTML != "") {
            this.innerHTML = `
            <h4 class="title">${type} - ${name}</h4>
            <h5 class="subtitle">${city}</h5>
            <div class="content">${this.innerHTML}</div>
            `;
            return
        }
        this.innerHTML = `
        <h4 class="title">${type} - ${name}</h4>
        <h5 class="subtitle">${city}</h5>
        `;
    }
}