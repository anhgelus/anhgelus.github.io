export const navbarItems = document.querySelectorAll('a.navbar-link');
export default function scrollingAnimation() {
    navbarItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            animate(item);
        });
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
    target === null || target === void 0 ? void 0 : target.scrollIntoView({ behavior: 'smooth' });
}
//# sourceMappingURL=scrollingAnimation.js.map