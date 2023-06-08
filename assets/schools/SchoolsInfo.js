export default class SchoolsInfo extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const type = this.getAttribute("type");
        const name = this.getAttribute("name");
        const city = this.getAttribute("city");
        this.classList.add("schools", "schools-info");
        this.registerEvents();
        if (this.innerHTML != "") {
            this.innerHTML = `
            <h4 class="title">${type} - ${name}</h4>
            <h5 class="subtitle">${city}</h5>
            <div class="content">${this.innerHTML}</div>
            `;
            return;
        }
        this.innerHTML = `
        <h4 class="title">${type} - ${name}</h4>
        <h5 class="subtitle">${city}</h5>
        `;
    }
    registerEvents() {
        console.log("called");
        console.log(this);
        this.addEventListener("click", (e) => {
            console.log("click");
            for (let i = 0; i < this.children.length; i++) {
                const child = this.children[i];
                if (!(child instanceof HTMLDivElement)) {
                    continue;
                }
                if (!child.classList.contains("content")) {
                    continue;
                }
                child.classList.toggle("is-enable");
            }
        });
    }
}
//# sourceMappingURL=SchoolsInfo.js.map