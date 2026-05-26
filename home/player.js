const image = document.getElementById("player");
const audio = document.getElementById("audio");

const stillImage = "img/dancestill.png";
const gifImage = "img/synced-gif.gif";

let playing = false;

image.addEventListener("click", () => {

    if (!playing) {

        // PLAY
        image.src = gifImage;
        audio.play();

        playing = true;

    } else {

        // STOP
        audio.pause();
        audio.currentTime = 0;

        image.src = stillImage;

        playing = false;
    }
});

// When audio naturally ends
audio.addEventListener("ended", () => {

    image.src = stillImage;
    playing = false;
});