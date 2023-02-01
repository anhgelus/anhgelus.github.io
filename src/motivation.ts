export const body = document.querySelector('.content')!;

export const params = new URLSearchParams(window.location.search);

export const lycees = {
    "llg": "Louis Le Grand",
    "sl": "Saint Louis",
}

export const types = ["mp2i", "mpsi"]

function render() {
    const ajax = new XMLHttpRequest();
    ajax.open('GET', `${window.location.origin}/assets/letter.md`, true);
    ajax.onload = () => {
        let content = ajax.responseText;
        while (content.includes("{ LYCEE_NOM }")) {
            const prepaType = params.get("type");
            if (prepaType == null || types.indexOf(prepaType) == -1) {
                body.innerHTML = "Impossible to find this type of CPGE.";
                return;
            }
            const lycee = params.get("lycee");
            if (lycee == null || lycees[lycee] == null) {
                body.innerHTML = "Impossible to find this lycée.";
                return;
            }
            const name = lycees[lycee];
            content = content.replace("{ LYCEE_NOM }", name);
        }
        let html = "";
        content.split("\n").forEach(line => {
            html += `<p>${line}</p>`;
        });
        body.innerHTML = html;
    }
    ajax.send();
}

render();
