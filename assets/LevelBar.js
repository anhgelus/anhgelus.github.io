export default class LevelBar extends HTMLElement {
    constructor() {
        super();
        this.level = 0;
        this.max = 0;
        this.percent = 0;
    }
    connectedCallback() {
        var _a;
        this.attachShadow({ mode: 'open' });
        this.level = Number(this.getAttribute('level'));
        this.max = Number(this.getAttribute('max'));
        this.percent = this.level / this.max;
        const wrapper = document.createElement('span');
        wrapper.classList.add('wrapper');
        wrapper.append(this.render());
        const style = document.createElement('style');
        style.textContent = `.bar {
        height: 50%;
        border: 7px solid #151414;
        background-color: #000;
        overflow: hidden;
        }
        .percent {
        height: 100%;
        display: block;
        width: ${this.percent * 100}%;
        background-color: ${this.getColor()};
        animation-duration: 1.75s;
        animation-name: reveal;
        }
        @keyframes reveal {
            from{
            transform: translateX(-100%);
            opacity: .5;
            }
            to{
            transform: translateX(0);
            opacity: 1;
            }
        }`;
        wrapper.append(style);
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.append(wrapper);
    }
    render() {
        const percent = this.percent;
        const bar = document.createElement('div');
        bar.classList.add('bar');
        const span = document.createElement('span');
        span.classList.add('percent');
        bar.append(span);
        return bar;
    }
    getColor() {
        const percent = this.level / this.max;
        if (percent < 0.33) {
            return "#A61414";
        }
        else if (percent < 0.66) {
            return "#ffcc00";
        }
        return "#14A734";
    }
}
//# sourceMappingURL=LevelBar.js.map