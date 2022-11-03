export default class RevealingElement {
    readonly element: HTMLElement;
    readonly disabledClass: string;
    readonly enabledClass: string;

    /**
     * Create a new RevealingElement
     * @param element The element to reveal
     * @param disabledClass The class name to use when the element is not visible
     * @param enabledClass The class name to use when the element is visible
     */
    constructor(element: HTMLElement, disabledClass: string, enabledClass: string) {
        this.element = element;
        this.disabledClass = disabledClass;
        this.enabledClass = enabledClass;
    }
}