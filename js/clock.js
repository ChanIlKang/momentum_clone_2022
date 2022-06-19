const clock = document.querySelector("#clock");

function getClock() {
    const time = new Date();
    const h = String(time.getHours()).padStart(2, "0");
    const m = String(time.getMinutes()).padStart(2, "0");
    const s = String(time.getSeconds()).padStart(2, "0");

    clock.innerText = `${h}:${m}:${s}`;

}
getClock();
setInterval(getClock, 1000);