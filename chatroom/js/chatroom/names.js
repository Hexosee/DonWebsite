let nameadjectives = []
let namenouns = []

// load from file
fetch("js/autogennames/adjectives.txt").then(res => res.text()).then(data => {
    nameadjectives = data.split("\n").filter(line => line.trim().replaceAll("\r", "").length > 0)
    nameadjectives = nameadjectives.map(line => line.replaceAll("\r", ""))
})
fetch("js/autogennames/nouns.txt").then(res => res.text()).then(data => {
    namenouns = data.split("\n").filter(line => line.trim().length > 0)
    namenouns = namenouns.map(line => line.replaceAll("\r", ""))
})

export function generaterandomname() {
    let adj = nameadjectives[Math.floor(Math.random() * nameadjectives.length)]
    let noun = namenouns[Math.floor(Math.random() * namenouns.length)]

    return adj + noun
}

export default {
    generaterandomname
}