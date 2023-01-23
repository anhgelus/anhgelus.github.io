export default class LevelBar extends HTMLElement {
    constructor() {
        super();
    }
    level: number = 0;
    max: number = 0;
    percent: number = 0;
    connectedCallback() {
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
        background-color: ${this.getColor(this.level)};
        animation-duration: ${0.35*this.level}s;
        animation-name: reveal;
        }
        @keyframes reveal {
            0%{
            transform: translateX(-100%);
            opacity: .5;
            background-color: ${this.getColor(this.level/this.max)};
            }
            50%{
            background-color: ${this.getColor(3*(this.level)/this.max)};
            }
            100%{
            transform: translateX(0);
            opacity: 1;
            }
        }`;
        wrapper.append(style);

        this.shadowRoot?.append(wrapper);
    }

    private render(): HTMLElement {
        const percent = this.percent;
        const bar = document.createElement('div');
        bar.classList.add('bar');
        const span = document.createElement('span');
        span.classList.add('percent');
        bar.append(span);
        return bar;
    }

    private getColor(level: number): string {
        const percent = level / this.max;
        if (percent < 0.33) {
            return "#A61414";
        } else if (percent < 0.66) {
            return "#ffcc00";
        }
        return "#14A734";
    }
}