var hoversound = document.createElement("audio")
hoversound.src = "/shared/sound/hover.wav"
document.body.appendChild(hoversound)
class SocialLink extends HTMLElement {
    connectedCallback() {
        const img = this.getAttribute("img")
        const link = this.getAttribute("link")

        let ael = document.createElement("a")
        ael.href = link

        ael.addEventListener("mouseenter", function() {
            hoversound.currentTime = 0
            hoversound.play()
        })
        
        let imgel = document.createElement("img")
        imgel.src = `/shared/img/socials/${img}.gif`
        imgel.className = "topbaricon"
        ael.appendChild(imgel)

        this.appendChild(ael)
    }
}
customElements.define("social-link", SocialLink)

class TopBar extends HTMLElement {
    connectedCallback() {
        this.outerHTML = `
            <div class="topbar" id="topbar">
            
            <div class="topbaricons" id="topbaricons"></div>

            <div class="scrollingcontainer">
                <marquee id="marq">
                    frick
                </marquee>
            </div>
        </div>
        `

        let marq = document.getElementById("marq")

        let canpick = [
            "fart mode: TRUE",
            "poop mode: ON",
            "<a target=\'_blank\' href=\'https://phil.kayladotcom.org/getfile/sapsucker%20rays\'>click me</a>",
            '<span style="color: rgb(255, 113, 160)">i have hacked donald\'s website. do not resist me. -kayla</span>'
        ]
                    
        let topick = Math.floor(Math.random() * canpick.length)
        let picked = canpick[topick]
        marq.innerHTML = picked
    }
}
customElements.define("top-bar", TopBar)

let topbar = document.createElement("top-bar")
document.body.appendChild(topbar)

let topbaricons = document.getElementById("topbaricons")

class Social {
    constructor(img, link) {
        this.img = img
        this.link = link
    }
}
let toadd = [
    new Social("twitter", "/workinprogress"),
    new Social("youtube", "/workinprogress"),
    new Social("roblox", "/workinprogress"),
    new Social("comms", "/comms"),
    new Social("dni", "/dni"),
    new Social("games", "/games")
]
for(social of toadd) {
    let sociallink = document.createElement("social-link")
    sociallink.setAttribute("img", social.img)
    sociallink.setAttribute("link", social.link)

    topbaricons.appendChild(sociallink)
}