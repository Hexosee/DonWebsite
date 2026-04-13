document.documentElement.style.setProperty("--color", "rgb(255, 109, 165)")

button = document.getElementById("butt")
button.addEventListener("click", function() {
    document.documentElement.style.setProperty("--color", "rgb(245, 255, 109)")
})