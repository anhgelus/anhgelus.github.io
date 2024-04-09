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
            <div class="anim">&nbsp;</div>
            <h4 class="title">${type} - ${name}</h4>
            <h5 class="subtitle">${city}</h5>
            <div class="content">${this.innerHTML}</div>
            `;
        }
        else {
            this.innerHTML = `
            <div class="anim">&nbsp;</div>
            <h4 class="title">${type} - ${name}</h4>
            <h5 class="subtitle">${city}</h5>
            `;
        }
    }
    registerEvents() {
        this.addEventListener("click", (e) => {
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
        this.addEventListener("mouseenter", (e) => {
            this.getAnim().classList.add("is-enable");
        });
        this.addEventListener("mouseleave", (e) => {
            this.getAnim().classList.remove("is-enable");
        });
    }
    getAnim() {
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (!(child instanceof HTMLDivElement)) {
                continue;
            }
            if (!child.classList.contains("anim")) {
                continue;
            }
            return child;
        }
        return null;
    }
}
//# sourceMappingURL=SchoolsInfo.js.map