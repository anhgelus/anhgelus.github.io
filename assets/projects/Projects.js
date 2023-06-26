var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class ProjectsList extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const href = this.getAttribute('href');
            const projects = yield fetch(href).then(r => r.json()).then(r => r.content);
            let content = "";
            for (let i = 0; i < projects.length; i++) {
                const project = projects[i];
                content += `<project-card title="${project.name}" href="${project.link}" image-src="${project.image}" image-alt="${project.alt}">`;
                content += `<to-get name="projects/${project.content}" simple="yes"></to-get>`;
                content += `<project-content>`;
            }
            this.innerHTML = content;
        });
    }
}
//# sourceMappingURL=Projects.js.map