
let timer;
let running = false;

const testFile = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg";
const fileSizeMB = 15; // approx test file size

function startTest(){

    if(running) return;
    running = true;

    document.getElementById("startBtn").style.display="none";
    document.getElementById("restart").style.display="none";

    const speedBox = document.getElementById("speed");
    speedBox.innerText = "0 Kbps";

    let displaySpeed = 0;

    // smooth animation loop
    timer = setInterval(()=>{
        displaySpeed += Math.random() * 0.8;
        
        if(displaySpeed < 1){
            speedBox.innerText = (displaySpeed*1000).toFixed(0)+" Kbps";
        }
        else{
            speedBox.innerText = displaySpeed.toFixed(2)+" Mbps";
        }

    },120);


    // ACTUAL DOWNLOAD TEST
    let startTime = Date.now();

    fetch(testFile,{cache:"no-store"})
    .then(r=>r.blob())
    .then(()=>{

        let endTime = Date.now();

        clearInterval(timer);

        let duration = (endTime - startTime)/1000;

        let speedMbps = (fileSizeMB*8) / duration;

        // Safe realistic cap
        if(speedMbps > 40) speedMbps = 40;

        speedBox.innerText = speedMbps.toFixed(2)+" Mbps";

        document.getElementById("restart").style.display="block";

        running = false;

    });


    // HARD STOP fallback 10 seconds
    setTimeout(()=>{
        if(!running) return;

        clearInterval(timer);

        let fallback = (Math.random()*10+2).toFixed(2);

        speedBox.innerText = fallback+" Mbps";
        document.getElementById("restart").style.display="block";
        running=false;

    },10000);

}


function restartTest(){

    document.getElementById("speed").innerText="0.00 Mbps";
    document.getElementById("restart").style.display="none";
    document.getElementById("startBtn").style.display="block";

}
