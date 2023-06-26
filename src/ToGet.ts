export default class ToGet extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const name = this.getAttribute("name")!;
        const subtitle = this.getAttribute("subtitle");
        const simple = this.getAttribute("simple")
        this.id = name;
        const url = `${window.location.origin}/content/${name}.md`;
        if (simple) {
            this.innerHTML = this.parseMarkdown(await fetch(url).then(r => r.text()));
            return;
        }
        this.classList.add("section");
        if (subtitle) {
            this.innerHTML = `
            <h2 class="title is-3">${this.parseName(name)}</h2>
            <p class="subtitle is-5">${subtitle}</p>
            ${this.parseMarkdown(await fetch(url).then(r => r.text()))}
            `;
            return;
        }
        this.innerHTML = `
        <h2 class="title is-3">${this.parseName(name)}</h2>
        ${this.parseMarkdown(await fetch(url).then(r => r.text()))}
        `;
    }

    parseMarkdown(markdown: string): string {
        const lines = markdown.split("\n")
        let html = ""
        for (let i = 0; i < lines.length; i++) {
            const line = this.parseLine(lines[i]);
            if (line.length == 0) {
                continue;
            }
            if (i == 0) {
                html += `<p>`;
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

    parseLine(line: string): string {
        const regex = /\[.*]\(https:\/\/[a-z.]+\.[a-z]+[a-zA-Z0-9?\/]*\)/g;
        const matches = line.match(regex);
        if (!matches) {
            return line;
        }
        for (let i = 0; i < matches.length; i++) {
            const match = matches[i];
            const name = match.substring(1, match.indexOf("]"));
            const url = match.substring(match.indexOf("(")+1, match.indexOf(")"));
            line = line.replace(match, `<a href="${url}" target="_blank">${name}</a>`);
        }
        return line;
    }

    parseName(name: string): string {
        name = name.replace("-", " ")
        return name.charAt(0).toUpperCase()+name.slice(1)
    }
}