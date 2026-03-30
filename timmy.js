const timmy = document.getElementById("timmy")
const timmytalk = document.getElementById("timmytx")
const breath = new Audio("sounds/timmy breath.wav")
console.log(timmy)

timmy.onclick = function() {
    timmytalk.remove()
    timmy.src = "/Images/timmybreath.png"
    breath.play()

    setTimeout(function() {
       window.location.href = "/"; 
    }, breath.duration*1000)
}