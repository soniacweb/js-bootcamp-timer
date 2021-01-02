class Timer {
  constructor(duration, startb, pause, callbacks) {
    this.duration = duration
    this.startb = startb
    this.pauseb = pause
    if (callbacks) {
      this.onStart = callbacks.onStart
      this.onTick = callbacks.onTick
      this.onComplete = callbacks.onComplete 
    }

    this.startb.addEventListener('click', this.start)
    this.pauseb.addEventListener('click', this.pause)
  }

  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining)
    }
    this.tick()
    this.interval = setInterval(this.tick, 50)
  }

  pause = () => {
    clearInterval(this.interval)
  }
  
  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause()
      if (this.onComplete) {
        this.onComplete()
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.05
      if (this.onTick) {
        this.onTick(this.timeRemaining)
      }
    }
  }
  //getting a variable
  get timeRemaining() {
    return parseFloat(this.duration.value)
  }
//setting the variable
  set timeRemaining(time) {
    this.duration.value = time.toFixed(2)
  }
 
}