secretpanel = document.getElementById("slideup")
secretinput = document.getElementById("secretinput")
secretbutton = document.getElementById("secretbutton")
err = document.getElementById("err")

erraudio = document.createElement("audio")
erraudio.src = "sound/no.mp3"

var soundup = document.createElement("audio")
soundup.src = "sound/secret/up.wav"
secretpanel.appendChild(soundup)

var sounddown = document.createElement("audio")
sounddown.src = "sound/secret/down.wav"
secretpanel.appendChild(sounddown)

secretpanel.addEventListener("mouseenter", () => {
    soundup.currentTime = 0
    soundup.play()
})
secretpanel.addEventListener("mouseleave", () => {
    sounddown.currentTime = 0
    sounddown.play()
})

const secrets = {
    "cGlhbm8=": "L3BpYW5v",
    "Y2xpcG9mdGhld2Vlaw==": "L2NsaXBvZnRoZXdlZWs="
}

secretbutton.addEventListener("click", () => {
    var input = btoa(secretinput.value)

    if(input in secrets) {
        window.location.href = atob(secrets[input])
    } else {
        erraudio.currentTime = 0
        erraudio.play()
        err.style.display = "block"
        setTimeout(function() {
            err.style.display = "none"
        }, 2000)
    }
})