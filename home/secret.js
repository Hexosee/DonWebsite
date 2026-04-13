secretpanel = document.getElementById("slideup")
secretinput = document.getElementById("secretinput")
secretbutton = document.getElementById("secretbutton")
err = document.getElementById("err")

erraudio = document.createElement("audio")
erraudio.src = "sound/no.mp3"

secretpanel.addEventListener("mouseleave", () => {
    secretinput.blur()
})

const secrets = {
    "cGlhbm8=": "L3BpYW5v"
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