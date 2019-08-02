const hourHand = document.querySelector('.clock__hourHand');
const minuteHand = document.querySelector('.clock__minuteHand');
const secondHand = document.querySelector('.clock__secondHand');

const twelveHours = hours => hours > 12 ? hours - 12 : hours;
const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const convertedHour = twelveHours(hour);
const hourHandPosition = convertedHour/12 * 360;
const minuteHandPosition = minute/60 * 360;
const secondHandPosition = second/60 * 360;


console.log(minute);


// hourHand.style.transform = `rotate(${hourHandPosition}deg)`
// minuteHand.style.transform = `rotate(${minuteHandPosition}deg)`
// secondHand.style.transform = `rotate(${secondHandPosition}deg)`






