import { ROOT, TOPIC_DISPLAY } from './elements.js'
import { sendsystemmessage } from './messages.js'
import * as Sounds from './sounds.js'

export var knowntopic = ""

export var connected = true
export var lastsuccessfulping = Date.now()

export var loadedinitialmessages = false

export function disconnect() {
    connected = false

    ROOT.replaceChildren()

    let downnotice = document.createElement("p")
        downnotice.textContent = "lost connection: refresh the page"
        downnotice.className = "downnotice"

    ROOT.appendChild(downnotice)
}

function settopic(newtopic) {
    knowntopic = newtopic
    
    let topicstr = `CHAT TOPIC: ${newtopic}`
    TOPIC_DISPLAY.textContent = topicstr
    
    if(loadedinitialmessages) {
        Sounds.NEW_TOPIC_SOUND.play()
        
        sendsystemmessage(topicstr)
    }
}

export default {
    get knowntopic() {
        return knowntopic
    },
    get connected() {
        return connected
    },
    
    lastsuccessfulping,
    loadedinitialmessages,

    disconnect,
    settopic
}