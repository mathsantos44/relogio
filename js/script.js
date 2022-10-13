const secondHand = document.querySelector('.sec-hand');
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date();

    const second = now.getSeconds();
    const secDegrees = ((second / 60) * 360) + 90;

    const minute = now.getMinutes();
    const minDegrees = ((minute / 60) * 360) + ((second / 60) * 6) +90;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((minute / 60) * 30) + 90;

    secondHand.style.transform = `rotate(${secDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);