export default class SchoolsDiploma extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const year = this.getAttribute("year");
        const name = this.getAttribute("name");
        const honors = this.getAttribute("honors");
        const strDone = this.getAttribute("done");
        const done = strDone != null;
        this.classList.add("schools", "schools-diploma");
        if (done) {
            this.innerHTML = `
            <div class="box done"></div>
            <p>${year} - ${name} (${honors})</p>
            <div class="box done"></div>
            `;
            return;
        }
        this.innerHTML = `
            <div class="box"></div>
            <p>${year} - ${name} (${honors})</p>
            <div class="box"></div>
            `;
    }
}
//# sourceMappingURL=SchoolsDiploma.js.map