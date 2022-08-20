export const navbarItems = document.querySelectorAll<HTMLLinkElement>('a.navbar-link');

export default function scrollingAnimation() {

    navbarItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            animate(item);
        });
    });
}

function animate(links: HTMLLinkElement) {
    const search = links.href.split('#')[1];
    let target: HTMLElement | null;
    if (search === "") {
        target = document.querySelector('.titles');
    } else {
        target = document.getElementById(search);
    }
    target?.scrollIntoView({ behavior: 'smooth' });
}
