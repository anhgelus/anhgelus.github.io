export const body = document.querySelector('.content');
export const params = new URLSearchParams(window.location.search);
export const lycees = {
    "llg": "Louis Le Grand",
    "sl": "Saint Louis",
    "pc": "Pierre Corneille",
    "pv": "Paul Valéry",
    "jds": "Janson de Sailly",
    "h": "Hoche",
    "k": "Kléber",
    "h4": "Henry IV",
    "c": "Charlemagne",
    "pgdg": "Pierre Gilles de Gennes",
    "b": "Buffon",
    "cp": "Camille Pissarro",
};
export const types = ["mp2i", "mpsi"];
function render() {
    const ajax = new XMLHttpRequest();
    ajax.open('GET', `${window.location.origin}/assets/letter.md`, true);
    ajax.onload = () => {
        let content = ajax.responseText;
        const prepaType = params.get("type");
        if (prepaType == null || types.indexOf(prepaType) == -1) {
            body.innerHTML = "<p>I am sorry I cannot find this CPGE type.</p>";
            return;
        }
        const lycee = params.get("lycee");
        if (lycee == null || lycees[lycee] == null) {
            body.innerHTML = "<p>I am sorry I cannot find this high school.</p>";
            return;
        }
        while (content.includes("{ LYCEE_NOM }")) {
            const name = lycees[lycee];
            content = content.replace("{ LYCEE_NOM }", name);
        }
        let html = "";
        let next = false;
        content.split("---").forEach(content => {
            if (next) {
                content.split('\n').forEach(line => {
                    if (line.trim().length != 0)
                        html += `<p>${line}</p>`;
                });
                next = false;
            }
            if (content.trim() == prepaType) {
                next = true;
            }
        });
        body.innerHTML = html;
    };
    ajax.send();
}
render();
//# sourceMappingURL=motivation.js.map