const initcolor = getComputedStyle(document.documentElement).getPropertyValue("--color")
function setColor(col) {
    document.documentElement.style.setProperty("--color", col)
}

class Friend extends HTMLElement {
    connectedCallback() {
        const img = this.getAttribute("img")
        const color = this.getAttribute("color")

        this.outerHTML = `
            <img src="${img}" class="friendimg" style="--color: ${color};" />
        `
    }
}
customElements.define("friend-", Friend)

const friends = document.getElementById("friends")

var numchildren = friends.children.length
var middle = Math.floor(numchildren/2)
var i = 0

var selected = -1

var data = [
    {
        name: "AstraNova",
        desc: "desc goes here"
    },
    {
        name: "Lib",
        desc: "desc goes here"
    },
    {
        name: "Paint",
        desc: "One of my best friends, the guy does music and honestly hes really good at it. I met paint a long time ago around when i was a small chud, i wasnt really as good friends with him at the start and didnt really talk to him much. However ever since we started working on projects together we got alot closer. Hes the guy behind the sunglasses mix"
    },
    {
        name: "Donald",
        desc: "Its me!"
    },
    {
        name: "Mike",
        desc: "desc goes here"
    },
    {
        name: "Kayla",
        desc: "desc goes here"
    },
    {
        name: "Owen",
        desc: "desc goes here"
    }
]

for(let child of friends.children) {
    data[i].color = getComputedStyle(child).getPropertyValue("--color")

    let diff = i - middle

    let basezind = -Math.abs(diff) + numchildren
    child.style.zIndex = basezind

    let basesize = 1 - Math.abs(diff) * 0.15
    basesize /= 1.25

    let vw = diff*265 * basesize
    let vh = (child.style.zIndex - numchildren)*25 * basesize

    child.style.transform = `translate(${vw}px, ${vh}px) scale(${basesize})`

    let next = i + Math.sign(-diff)
    console.log(next)

    let me = i
    child.addEventListener('mouseenter', (e) => {
        if(selected != -1) return;
        
        const el = e.target
        el.style.transform = `translate(${vw}px, ${vh-1}px) scale(${basesize*1.1})`
        el.style.zIndex = 500
        
        setColor(data[me].color)
    })

    let unsel = function(el) {
        if(selected != -1) return;

        el.style.transform = `translate(${vw}px, ${vh}px) scale(${basesize})`
        el.style.zIndex = basezind

        setColor(initcolor)
    }
    child.addEventListener('mouseleave', (e)=>{
        const el = e.target
        unsel(el)
    })

    child.addEventListener('click', (e) => {
        if(selected != -1) return;

        selected = me

        // dont really wanna write html in js but....
        const menu = document.createElement("div")
        friends.appendChild(menu)

        menu.style.backdropFilter = "blur(5px)"
        menu.style.backgroundColor = "rgb(from var(--color) r g b / 0.45)"
        menu.style.width = "100%"
        menu.style.height = "100%"
        menu.style.display = "flex"
        menu.style.flexDirection = "column"
        menu.style.alignItems = "center"
        menu.style.zIndex = 1000
        menu.style.padding = "20px"

        menu.innerHTML = `
            <h1>${data[me].name}</h1>
            <hr>
            <br>
            <p>
${data[me].desc}
            </p>
        `

        const button = document.createElement("button")
        button.innerText = "close"
        button.style.position = "absolute"
        button.style.bottom = "20px"
        menu.appendChild(button)

        button.addEventListener('click', () => {
            selected = -1
            menu.remove()
            unsel(child)
        })
    })

    i++
}