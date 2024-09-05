const deadMoles = document.getElementById("dead");
const misses = document.getElementById("lost");

let dead = 0, miss = 0;


function getHole(index) {
    let hole = document.getElementById(`hole${index}`);
    return hole;
}

for(let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.addEventListener("click", () => {
        if(hole.classList.contains( 'hole_has-mole' )){
            dead++
            deadMoles.innerHTML = dead;
            if(dead > 9) { 
                alert("Победа!");
                dead = 0;
                miss = 0;
                return;
            }
        } else {
            miss++;
            misses.innerHTML = miss;
            if(dead > 9) {
                alert("Поражение!"); 
                dead = 0;
                miss = 0;
                return;
            };
        }
    }
)}
