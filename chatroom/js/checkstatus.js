// get the status of the chatroom
let ENDPOINT = "https://phil.kayladotcom.org/donchatroom"
let chatroomroot = document.getElementById("chatroomroot")

function checkstatus() {
    fetch(`${ENDPOINT}/status`).then(res => res.json()).then(data => {
        let active = data.active

        if(!active) {
            chatroomroot.innerHTML = `
                <p id="downnotice">
                    the chat room is currently not active. sorry!
                </p>
            `
        } else {
            chatroomroot.innerHTML = `
                <div id="chatroomhistory">
                    
                </div>
                <div id="chatroombottom">
                    <div id="chatroompersonalizeroot">
                        <div id="iconselect">
                            <img id="selicon" src="img/icons/icon1.png">
                        </div>
                        <input type="text" id="chatroomnameinput" placeholder="NAME HERE">
                    </div>
                    <div id="chatroominputroot">
                        <textarea id="chatroominput"></textarea>
                    </div>
                </div>
            `

            let script = document.createElement("script")
            script.src = "js/chatroom.js?v=1"
            document.body.appendChild(script)
        }
    })
}
checkstatus()