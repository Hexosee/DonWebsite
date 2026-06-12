export const MAX_ICON_ID = 7

export function formaticonid(id) {
    return `img/icons/icon${id}.png`
}

export function getrandomicon() {
    return Math.floor(Math.random() * (MAX_ICON_ID + 1))
}