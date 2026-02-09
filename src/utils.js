/* NB: This is a shamelessly copied implementation of the Fisher-Yates shuffle algorithm. I just moved it to a separate file for better code organization. I cannot mathematic this goodly. */

export function shuffle(arr) {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
}