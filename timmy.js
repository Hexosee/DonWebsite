const timmy = document.getElementById("timmy")
const timmytalk = document.getElementById("timmytx")
const breath = new Audio("sound/timmy breath.wav")
console.log(timmy)

timmy.onclick = function() {
    timmytalk.remove()
    timmy.src = "img/timmybreath.png"
    breath.play()

    setTimeout(function() {
       window.location.href = "/home"; 
    }, breath.duration*1000)
}