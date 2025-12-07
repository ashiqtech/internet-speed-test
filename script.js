function startTest(){

    let speedBox = document.getElementById('speed');
    speedBox.innerText = "Testing...";

    let startTime = Date.now();

    fetch("https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg",{cache:"no-store"})
    .then(res=>res.blob())
    .then(blob=>{

        let endTime = Date.now();

        let duration = (endTime - startTime) / 1000;

        let sizeMB = 5;

        let speed = (sizeMB / duration).toFixed(2);

        speedBox.innerText = speed + " Mbps";

    });
}
