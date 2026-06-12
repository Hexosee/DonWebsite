const SAVE_DATA_KEY = "chatroom-profile"

export function savedataexists() {
    return window.localStorage.getItem(SAVE_DATA_KEY) !== null
}

export function savestuff(name, icon) {
    window.localStorage.setItem(SAVE_DATA_KEY, JSON.stringify({
        name: name,
        icon: icon
    }))
}

export function loadstuff() {
    let saved = window.localStorage.getItem(SAVE_DATA_KEY)
    
    if(saved !== null) {
        try {
            let parsed = JSON.parse(saved)
            if('name' in parsed && 'icon' in parsed) {
                return parsed
            }
        } catch(e) {
            console.log("failed to parse saved profile")
        }
    }
}