let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(()=>{
    let currentTime = new Date();

    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();

    let time = [hrs, min, sec];

    time.forEach(element => {
        if (element.innerHTML.length === 1){
            element.innerHTML = '0' + element.innerHTML
        } 
    });
}, 1000)