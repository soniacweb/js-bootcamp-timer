class Timer {
  constructor(duration, startb, pause) {
    this.duration = duration
    this.startb = startb
    this.pauseb = pause

    this.startb.addEventListener('click', this.start)
    this.pauseb.addEventListener('click', this.pause)

  }
  start = () => {
    this.tick()
    this.timer = setInterval(this.tick, 1000)
  }

  tick() {
    const timeRemaining = parseFloat(this.duration.value)
    console.log(timeRemaining)
    this.duration.value = timeRemaining -1
  }

  pause = () => {
    clearInterval(this.timer)
  }
}

const duration = document.querySelector('#duration')
const startb = document.querySelector('#start')
const pause = document.querySelector('#pause')

const timer = new Timer(duration, startb, pause)