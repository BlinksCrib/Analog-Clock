setInterval(setClock, 1000)

let hourRatio = document.querySelector('[data-hour]')
let minutesRatio = document.querySelector('[data-minutes]')
let secondsRatio = document.querySelector('[data-seconds]')

function setClock () {
    let currentDate = new Date()
    let seconds = currentDate.getSeconds()/60
    let minutes = currentDate.getMinutes()/60
    let hour = currentDate.getHours()/12

    setRotation(hourRatio, hour)
    setRotation(minutesRatio, minutes)
    setRotation(secondsRatio, seconds)
}

function setRotation (x, y) {
    x.style.setProperty('--rotation', y * 360)
}
setRotation();