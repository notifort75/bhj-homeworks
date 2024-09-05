const lastSeconds = document.getElementById("timer");

let count = lastSeconds.innerHTML;
let isWin = false;

function timerToWin() {
    let timerId = setInterval(() => {
        if(count == 1) {
            clearInterval(timerId);
            alert("Вы победили в конкурсе!");
        }
        count--;
        lastSeconds.innerHTML = "" + count;
    }, 1000);
}

timerToWin();