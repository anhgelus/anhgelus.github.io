export default class LegalFrench extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <h1 class="title is-2 mt-4">Mentions Légales</h1>
        <p>
            Tous les sites webs présent sur un sous-domaine de anhgelus.world (e.g. blog.anhgelus.world, www.anhgelus.world)
             ("sites") suivent ces mentions légales.
        </p>
        <h2 class="title is-4">Propriété</h2>
        <p>
            Le propriétaire de ces sites est M. WILLIAM HERGÈS.
        </p>
        <p>
            Le contenu des sites est protégé par la licence CC BY-SA-NC 4.0, sauf mention contraire. <br>
            Le code source des sites est protégé par la licence AGPL-3.0-or-later, sauf mention contraire.
        </p>
        <h2 class="title is-4">Hébergement</h2>
        <p>
            L'hébergement de ces sites webs sont assurés par :
        </p>
        <ul>
            <li>GitHub, Inc (pour www.anhgelus.world)</li>
            <li>Infomaniak Network SA (pour l'ensemble des autres sites)</li>
        </ul>
        <p>
            Le propriétaire et l'hébergeur du site ne pourront être tenu comme responsable si le site ne s'aurait être 
            accessible.
        </p>
        <h2 class="title is-4">Vie privée</h2>
        <p>
            Les cookies utilisés par nos sites sont obligatoires : ils servent uniquement au bon fonctionnement et non au
             tracking, à la publicité ciblée ou toute autre utilisation n'altérant pas la fonctionnalité du site.
        </p>
        <p>
            Nous récupérons uniquement votre adresse IP que nous stockons pendant 1 an pour des raisons légales. <br>
            Nous utilisons aussi l'outil de statistique Matomo qui n'est pas désactivable puisqu'il n'identifie pas 
            l'utilisateur.
        </p>
        `
    }
}
