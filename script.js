// Clock

function clock()
{
    const time = new Date();

    let h = add_zero(time.getHours());
    let m = add_zero(time.getMinutes());
    let s = add_zero(time.getSeconds());
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(clock, 1000);
}

function add_zero(i)
{
    if (i < 10) {i = "0" + i};
    return i;
}


// Timer

let x;

function start_timer(seconds) {
    clearInterval(x);
    const time = new Date().getTime();
    const target = new Date(time + seconds * 1000);
    timer(target);
}

function timer(target) {
    x = setInterval(function() {
        count_timer(target, x);
    }, 1000);
}

function count_timer(target, x)
{
    const now = new Date().getTime();
    const remain = target - now;
    
    if (remain >= 0)
    {
        const hours = Math.floor((remain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remain % (1000 * 60)) / 1000);
        
        document.getElementById("timer").innerHTML = hours + " Jam " + minutes + " Menit " + seconds + " Detik ";
    }
    else
    {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "WAKTU HABIS";
    }
}

// Stopwatch

let sw_time;
let hours = 0;
let minutes = 0;
let seconds = 0;
let count = 0;
let is_running = false;

function start_stopwatch()
{
    if (!is_running) {
        sw_time = setInterval(stopWatch, 10);
        is_running = true;
    }
}

function stop_stopwatch()
{
    clearInterval(sw_time);
    is_running = false;
}

function reset_stopwatch()
{
    clearInterval(sw_time);
    is_running = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    count = 0;
    document.getElementById("stopwatch").innerHTML = "0 Jam 0 Menit 0 Detik";
}

function stopWatch()
{
    count++;

    if (count == 100)
    {
        count = 0;
        seconds++;
    }

    if (seconds == 60)
    {
        seconds = 0;
        minutes++;
    }

    if (minutes == 60)
    {
        minutes = 0;
        hours++;
    }

    document.getElementById("stopwatch").innerHTML = hours + " Jam " + minutes + " Menit " + seconds + " Detik ";
}