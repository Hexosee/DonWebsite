class ExampleTile extends HTMLElement {
    connectedCallback() {
        const img = this.getAttribute("img")
        const desc = this.getAttribute("desc")

        this.outerHTML = `
            <div class="extile">
                <a href="${img}" target="_blank">
                    <img src="${img}" class="exampleimg">
                </a>
                ${desc}
            </div>
        `
    }
}

customElements.define("example-tile", ExampleTile)