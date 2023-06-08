var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class ToGet extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const name = this.getAttribute("name");
            const subtitle = this.getAttribute("subtitle");
            const simple = this.getAttribute("simple");
            this.id = name;
            const url = `${window.location.origin}/content/${name}.md`;
            if (simple) {
                this.innerHTML = this.parseMarkdown(yield fetch(url).then(r => r.text()));
                return;
            }
            this.classList.add("section");
            if (subtitle) {
                this.innerHTML = `
            <h2 class="title is-3">${this.parseName(name)}</h2>
            <p class="subtitle is-5">${subtitle}</p>
            ${this.parseMarkdown(yield fetch(url).then(r => r.text()))}
            `;
                return;
            }
            this.innerHTML = `
        <h2 class="title is-3">${this.parseName(name)}</h2>
        ${this.parseMarkdown(yield fetch(url).then(r => r.text()))}
        `;
        });
    }
    parseMarkdown(markdown) {
        const lines = markdown.split("\n");
        let html = "";
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.length == 0) {
                continue;
            }
            if (i == 0) {
                html += `<p>${line}`;
                continue;
            }
            if (i < lines.length - 1 && lines[i + 1].length < 1) {
                html += ` ${line}</p>`;
            }
            else if (i != 0 && lines[i - 1].length < 1) {
                html += `<p>${line}`;
            }
            else {
                html += ` ${line}`;
            }
        }
        return html;
    }
    parseName(name) {
        name = name.replace("-", " ");
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
}
//# sourceMappingURL=ToGet.js.map