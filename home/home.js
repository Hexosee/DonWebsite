class SocialLink extends HTMLElement {
    connectedCallback() {
        const link = this.getAttribute("link")
        const img = this.getAttribute("img")

        this.outerHTML = `
            <a href="${link}">
                <img src="img/socials/${img}" class="socialimg">
            </a>
        `
    }
}

customElements.define("social-link", SocialLink)