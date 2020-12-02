let myTimer;
    sigarettes = 0,
    counter = document.getElementById('count');

counter.append("Выкуренно сигарет: " + sigarettes)

function clock() {
    myTimer = setInterval(myClock, 1000);
    let c = 5; //Initially set to 1 hour
    sigarettes = sigarettes + 1;
    counter.textContent = "Сигарет выкуренно: " + sigarettes;
    //counter.append("Выкуренно сигарет: " + sigarettes);
    function myClock() {
        --c
        let seconds = c % 60,
            secondsInMinutes = (c - seconds) / 60,
            minutes = secondsInMinutes % 60,
            hours = (secondsInMinutes - minutes) / 60;
        console.clear();
        console.log(hours + ":" + minutes + ":" + seconds)
        if (c == 0) {
            clearInterval(myTimer);
            
        }
    }
};