class Timer {
  constructor(duration, start, pause) {
    this.duration = duration
    this.start = start
    this.pause = pause

    this.start.addEventListener('click', this.start)
  }
  start() {
    console.log('starting')
  }
}

const duration = document.querySelector('#duration')
const start = document.querySelector('#start')
const pause = document.querySelector('#pause')