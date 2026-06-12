let spidx = 0
class SpecialName {
    constructor(color, notifsound) {
        this.icon = --spidx
        this.color = color

        if(notifsound !== undefined) {
            this.notifsound = document.createElement("audio")
                this.notifsound.src = `sound/special/${notifsound}.mp3`
        }
    }

    getcss() {
        return `
            color: ${this.color};
            border-bottom: 1px dashed ${this.color};
        `
    }

    getnotifsound() {
        if(this.notifsound) {
            return this.notifsound
        }

        return RECIEVE_SOUND
    }
}

// you need to add in order of the icons, descending. e.g.:
export const namemap = {
    "donaldani": new SpecialName('#ff7700', 'donaldrecieve'), // this is -1
    "ms_kaylaa": new SpecialName('#ff72c0', 'kaylarecieve'), // this is -2
    "ukubabe": new SpecialName('#575799', 'ukurecieve'), // this is -3
    "paint": new SpecialName('#1c2dc5', 'paintrecieve'), // etc
    "hexose": new SpecialName('#9817d4', 'hexoserecieve'), // etc
    "sans": new SpecialName('#3a3cc0', 'sansrecieve'), // etc
}

export function checkifspecial(name) {
    if(name.toLowerCase() in namemap) {
        return namemap[name.toLowerCase()]
    }
    return false
}