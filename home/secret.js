secretpanel = document.getElementById("secretpanel")
secretinput = document.getElementById("secretinput")

secretpanel.addEventListener("mouseleave", () => {
    secretinput.blur()
})