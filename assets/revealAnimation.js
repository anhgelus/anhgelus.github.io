const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
    });
}, {
    threshold: 0.25
});
/**
 * Add a reveal animation to an element
 * @param element
 */
export function revealAnimation(element) {
    observer.observe(element);
    element.classList.add("is-not-reveal");
}
/**
 * Add a reveal animation for a list of elements
 * @param elements The list of elements to reveal
 */
export default function revealAnimationForElements(elements) {
    elements.forEach(element => revealAnimation(element));
}
//# sourceMappingURL=revealAnimation.js.map