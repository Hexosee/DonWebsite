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
for(var child of friends.children) {
    console.log(child)

    let diff = i - middle

    let basezind = -Math.abs(diff) + numchildren
    child.style.zIndex = basezind

    let vw = diff*10
    let vh = (child.style.zIndex - numchildren)*5

    let next = i + Math.sign(-diff)
    console.log(next)

    let basesize = 1 - Math.abs(diff) * 0.15
    child.style.transform = `translate(${vw}vw, ${vh}vh) scale(${basesize})`

    child.addEventListener('mouseenter', (e) => {
        const el = e.target
        el.style.transform = `translate(${vw}vw, ${vh-1}vh) scale(${basesize*1.1})`
        el.style.zIndex = 1000
        
        setColor(getComputedStyle(el).getPropertyValue("--color"))
    })
    child.addEventListener('mouseleave', (e) => {
        const el = e.target
        el.style.transform = `translate(${vw}vw, ${vh}vh) scale(${basesize})`
        el.style.zIndex = basezind

        setColor(initcolor)
    })

    i++
}