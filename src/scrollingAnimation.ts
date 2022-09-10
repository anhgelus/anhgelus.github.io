export const navbarItems = document.querySelectorAll<HTMLAnchorElement>('a.navbar-link');
export const navbar = document.querySelector<HTMLElement>('.navbar');
let override = false;

export default function scrollingAnimation() {

    let lastScroll = 0;

    navbar?.classList.add("is-appear");

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
        override = false;
        lastScroll = window.scrollY;
        navbar.classList.add("is-hidden");
        navbar.classList.remove("is-appear");
    });
}

function animate(links: HTMLAnchorElement) {
    const search = links.href.split('#')[1];
    let target: HTMLElement | null;
    if (search === "") {
        target = document.querySelector('.titles');
    } else {
        target = document.getElementById(search);
    }

    override = true;

    if (navbar !== null) {
        navbar.classList.add("is-hidden");
    }

    target?.scrollIntoView({ behavior: 'smooth' });
}
