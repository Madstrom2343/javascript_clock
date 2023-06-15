// script.js for digital clock

function displayTime() {
    const now = new Date()

    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()
    let period = 'AM'

    if (hour == 0) {
        hour = 12
    }

    if (hour > 12) {
        hour = hour - 12
        period = 'PM'
    }

    hour = (hour < 10) ? "0" + hour : hour
    minute = (minute < 10) ? "0" + minute : minute
    second = (second < 10) ? "0" + second : second

    clocks.innerText = hour + ':' + minute + ':' + second + " " + period
}

const clocks = document.querySelector('#clockDisplay')
const interval = setInterval(displayTime, 1000)

// Clock color change for numbers
const orangeButto = document.querySelector('#orange')
const redButto = document.querySelector('#red')
const originalButto = document.querySelector('#original')
//clock color change for background
const lGreyButto = document.querySelector('#lGrey')
const whiteButto = document.querySelector('#white')
const blackButto = document.querySelector('#black')

//lsitener for first buttons
orangeButto.addEventListener('click', function () {
    clocks.style.color = "orange"
})

redButto.addEventListener('click', function () {
    clocks.style.color = "crimson"
})

originalButto.addEventListener('click', function () {
    clocks.style.color = "#00ff3c"
})


//lsitener for second buttons #696565
lGreyButto.addEventListener('click', function () {
    clocks.style.background = "linear-gradient(0deg, rgb(112, 110, 110) 0%, rgb(77, 75, 75) 100%)"
})

whiteButto.addEventListener('click', function () {
    clocks.style.background = "linear-gradient(0deg, rgb(253, 253, 253) 0%, rgb(77, 75, 75) 100%)"
})

blackButto.addEventListener('click', function () {
    clocks.style.background = "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgb(77, 75, 75) 100%)"
})