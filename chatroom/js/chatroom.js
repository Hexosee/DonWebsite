const SEND_SOUND = document.createElement("audio")
    SEND_SOUND.src = "sound/send.mp3"
const RECIEVE_SOUND = document.createElement("audio")
    RECIEVE_SOUND.src = "sound/recieve.mp3"

const CHATROOM_ENDPOINT = "https://phil.kayladotcom.org/donchatroom"
const PING_INTERVAL = 5000

// chat room elements
let nameinput = document.getElementById("chatroomnameinput")
let iconselect = document.getElementById("iconselect")
let iconimg = document.getElementById("selicon")

let history = document.getElementById("chatroomhistory")
let input = document.getElementById("chatroominput")

// chat room vars
let nameadjectives = [
    "Smelly",
    "Loud",
    "Obnoxious",
    "Proud",
    "Egolicious",
    "Tuffmongus",
    "Beautiful"
]
let namenouns = [
    "Foot",
    "Priest",
    "Friend",
    "Feather",
    "Tuffmongus",
    "Stitch",
    "Robot",
    "Sphere",
    "Bottle",
    "Pen",
    "Phone"
]

let name
var adj = nameadjectives[Math.floor(Math.random() * nameadjectives.length)]
var noun = namenouns[Math.floor(Math.random() * namenouns.length)]
name = adj + noun

let icon = Math.floor(Math.random() * 5)

// set up the defaults
nameinput.value = name
iconimg.src = `img/icons/icon${icon + 1}.png`
history.scrollTop = history.scrollHeight


// set up interactions
input.addEventListener('keydown', (e)=>{
    if(e.key === "Enter") {
        e.preventDefault()
        
        let text = input.value.trim()
        let id = crypto.randomUUID()
        
        if(name.length == 0) {
            var adj = nameadjectives[Math.floor(Math.random() * nameadjectives.length)]
            var noun = namenouns[Math.floor(Math.random() * namenouns.length)]
            name = adj + noun

            nameinput.value = name
        }

        let message = {
            name: name,
            icon: icon,
            text: text,
            id: id
        }
        
        fetch(CHATROOM_ENDPOINT + "/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
        
        input.value = ""
        
        // render new message
        let p = document.createElement("p")
        p.className = "chat"
        p.id = message.id
        
        let img = document.createElement("img")
        img.src = `img/icons/icon${message.icon + 1}.png`
        p.appendChild(img)
        
        let textnode = document.createTextNode(`<${message.name}> ${message.text}`)
        p.appendChild(textnode)
        
        history.appendChild(p)
        
        SEND_SOUND.play()
        history.scrollTop = history.scrollHeight
    }
})

let specialnames = {
    "donaldani": 6,
    "ms_kaylaa": 7
}
let usingspecial = false
nameinput.addEventListener('input', (e) => {
    name = e.target.value

    let usinglastspecial = usingspecial
    usingspecial = false
    for(special of Object.keys(specialnames)) {
        if(name.toLowerCase() === special) {
            icon = specialnames[special] - 1
            iconimg.src = `img/icons/icon${icon + 1}.png`

            usingspecial = true
        }
    }

    if(!usingspecial && usinglastspecial) {
        icon = 0
        iconimg.src = `img/icons/icon${icon + 1}.png`
    }
})

iconselect.addEventListener("click", () => {
    if(usingspecial) return
    icon = (icon + 1) % 5
    iconimg.src = `img/icons/icon${icon + 1}.png`
})


// how this is gonna work:
// when u send a message, it renders immediately
// every n seconds, ping the chatroom endpoint. 

function refreshmessages() {
    fetch(CHATROOM_ENDPOINT + "/messages").then(res => res.json()).then(messages => {
        let added = false
        for(message of messages) {
            if(document.getElementById(message.id)) {
                continue
            }
            added = true
            
            /*
                <p class="chat">
                <img src="img/icons/icon1.png">
                &lt;examplename&gt; hi
                </p>
            */
            let p = document.createElement("p")
            p.className = "chat"
            p.id = message.id
            
            let img = document.createElement("img")
            img.src = `img/icons/icon${message.icon + 1}.png`
            p.appendChild(img)
            
            let textnode = document.createTextNode(`<${message.name}> ${message.text}`)
            p.appendChild(textnode)
            
            history.appendChild(p)
        }
        history.scrollTop = history.scrollHeight
        
        if(added) {
            RECIEVE_SOUND.play()
        }
    })
    
    setTimeout(refreshmessages, PING_INTERVAL)
}
refreshmessages()