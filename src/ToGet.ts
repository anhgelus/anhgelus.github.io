export default class ToGet extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const name = this.getAttribute("name")!;
        this.id = name;
        const url = `${window.location.origin}/content/${name}.md`;
        this.innerHTML = `
        <h2 class="title is-3">${this.parseName(name)}</h2>
        ${this.parseMarkdown(await fetch(url).then(r => r.text()))}
        `;
    }

    parseMarkdown(markdown: string): string {
        const lines = markdown.split("\n")
        let html = ""
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.length == 0) {
                continue;
            }
            if (i < lines.length - 1 && lines[i+1].length < 1) {
                html += ` ${line}</p>`;
            } else if (i != 0 && lines[i-1].length < 1) {
                html += `<p>${line}`;
            } else {
                html += ` ${line}`;
            }
        }
        return html;
    }

    parseName(name: string): string {
        name = name.replace("-", " ")
        return name.charAt(0).toUpperCase()+name.slice(1)
    }
}