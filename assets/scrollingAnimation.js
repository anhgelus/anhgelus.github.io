export const navbarItems = document.querySelectorAll('a.navbar-link');
export const navbar = document.querySelector('.navbar');
let override = false;
export default function scrollingAnimation() {
    let lastScroll = 0;
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.add("is-appear");
    navbarItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            animate(item);
        });
    });
    document.addEventListener('scroll', (e) => {
        if (navbar === null) {
            return;
        }
        if (!(lastScroll < window.scrollY) && !override) {
            navbar.classList.remove("is-hidden");
            navbar.classList.add("is-appear");
            lastScroll = window.scrollY;
            return;
        }
        lastScroll = window.scrollY;
        navbar.classList.remove("is-appear");
        navbar.classList.add("is-hidden");
    });
}
function animate(links) {
    const search = links.href.split('#')[1];
    let target;
    if (search === "") {
        target = document.querySelector('.titles');
    }
    else {
        target = document.getElementById(search);
    }
    override = true;
    if (navbar !== null) {
        navbar.classList.remove("is-appear");
        navbar.classList.add("is-hidden");
    }
    target === null || target === void 0 ? void 0 : target.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        override = false;
    }, 2000);
}
//# sourceMappingURL=scrollingAnimation.js.map