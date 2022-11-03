import RevealingElement from "./RevealingElement.js";

const list: RevealingElement[] = [];

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }
        // get the element from the list
        let e;
        list.forEach((element) => {
            if (element.element === entry.target) {
                e = element;
            }
        });
        // if the element is not in the list, return
        if (!(e instanceof RevealingElement)) {
            return;
        }
        // remove the disabled class and add the enabled class
        entry.target.classList.replace(e.disabledClass, e.enabledClass);
        // remove the observer from the element
        observer.unobserve(entry.target);
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px 5% 0px"
});

/**
 * Add a reveal animation to an element
 * @param element
 * @param className the class name to use
 */
export function revealAnimation(element: HTMLElement, className = {"disabled": "is-hidden", "enabled": "is-appear"}) {
    // disable the visibility of the element
    element.classList.add(className.disabled);
    // register the element and observe it
    list[list.length] = new RevealingElement(element, className.disabled, className.enabled);
    observer.observe(element);
}

/**
 * Add a reveal animation for a list of elements
 * @param elements The list of elements to reveal
 * @param className The class name to use
 */
export default function revealAnimationForElements(elements: NodeListOf<HTMLElement>,
                                                   className = {"disabled": "is-hidden", "enabled": "is-appear"}) {
    elements.forEach(element => revealAnimation(element, className));
}
