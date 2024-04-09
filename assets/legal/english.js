export default class LegalEnglish extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <h1 class="title is-2 mt-4">Terms of Use</h1>
        <p>
            All the websites on the subdomains anhgelus.world (e.g. blog.anhgelus.world, www.anhgelus.world)
            ("websites") follow this legal mentions.
        </p>
        <h2 class="title is-4">Property</h2>
        <p>
            These websites are owned by Mr. WILLIAM HERGÈS.
        </p>
        <p>
            The content of this website is protected under the license CC BY-SA-NC 4.0, except contrary mentions. <br>
            The source code is protected under the license AGPL-3.0-or-later, except contrary mentions.
        </p>
        <h2 class="title is-4">Hosting</h2>
        <p>
            The hosting of these websites are handled by :
        </p>
        <ul>
            <li>GitHub, Inc (for www.anhgelus.world)</li>
            <li>Infomaniak Network SA (for l'ensemble des autres sites)</li>
        </ul>
        <p>
            The owner and the host of the website shall not be held responsible if the website is not accessible.
        </p>
        <h2 class="title is-4">Private life</h2>
        <p>
            Cookies used by the website are necessary : they are used only for the proper functioning of the site and not
            for tracking, targeted advertising or any other use that does not alter the website's functionality.
        </p>
        <p>
            We are only collecting your IP address and we are storing it for one year for legal reasons. <br>
            We are using the analytics tools provided by CloudFlare, Inc (<a
            href="https://www.cloudflare.com/en-en/privacypolicy/" target="_blank">privacy policy</a>) which cannot be
            disabled, since it does not identify the user.
        </p>
        `;
    }
}
//# sourceMappingURL=english.js.map