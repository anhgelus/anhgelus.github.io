export const navbarItems = document.querySelectorAll<HTMLAnchorElement>('a.navbar-link');
export const navbar = document.querySelector<HTMLElement>('.navbar');
let override = false;
let lastScroll = 0;

export default function scrollingAnimation() {

    navbar?.classList.add("is-appear-top");

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
        if (override) {
            return;
        }
        if (lastScroll > window.scrollY) {
            navbar.classList.remove("is-hidden-top");
            navbar.classList.add("is-appear-top");
            lastScroll = window.scrollY;
        } else {
            lastScroll = window.scrollY;
            navbar.classList.remove("is-appear-top");
            navbar.classList.add("is-hidden-top");
        }
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
        navbar.classList.toggle("is-hidden-top");
        navbar.classList.toggle("is-appear-top");
    }

    target?.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
        override = false;
        lastScroll = window.scrollY;
    }, 300);
}
