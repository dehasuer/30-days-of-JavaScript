const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

const updateTime = function(){
    const newTime = new Date()
    hour.innerHTML = newTime.getHours();
    min.innerHTML = newTime.getMinutes();
    sec.innerHTML = newTime.getSeconds();
}


setInterval(updateTime, 1000);

