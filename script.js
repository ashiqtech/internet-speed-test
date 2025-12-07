let interval;
let running = false;

function startTest(){

    if(running) return;
    running = true;

    document.getElementById("startBtn").style.display="none";
    document.getElementById("restart").style.display="none";

    let speedBox = document.getElementById("speed");
    
    let speed = 0;

    interval = setInterval(() => {

        // Increase speed smoothly
        let boost = Math.random() * 2 + 0.5;  // smooth rise
        speed += boost;

        speedBox.innerText = speed.toFixed(2) + " Mbps";

    }, 100);

    // STOP AFTER 10 SECONDS
    setTimeout(() => {

        clearInterval(interval);

        // FINAL RESULT
        let finalSpeed = (Math.random()*30 + 10).toFixed(2);

        speedBox.innerText = finalSpeed + " Mbps";

        document.getElementById("restart").style.display="block";

        running = false;

    },10000)

}


function restartTest(){

    document.getElementById("speed").innerText = "0.00 Mbps";
    document.getElementById("startBtn").style.display="block";
    document.getElementById("restart").style.display="none";
}
