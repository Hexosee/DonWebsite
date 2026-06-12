import {
    NAME_INPUT,
    ICON_IMG
} from './elements.js'

import { formaticonid } from './icons.js'

export var name = "PoopFart"
export var icon = 0
export var usingspecial = false

export function setname(newname) {
    name = newname
    NAME_INPUT.value = newname
}

export function seticon(newicon) {
    icon = newicon
    ICON_IMG.src = formaticonid(newicon)
}

export default {
    get name() {
        return name
    },
    get icon() {
        return icon
    },
    usingspecial,

    setname,
    seticon
}