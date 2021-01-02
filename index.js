const duration = document.querySelector('#duration')
const startb = document.querySelector('#start')
const pause = document.querySelector('#pause')

const circle = document.querySelector('circle')
const perimeter = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray', perimeter)
// let currentOffset = 0

//creating a new instance of the object
const timer = new Timer(duration, startb, pause, {
  onStart(totalDuration) {
    duration1 = totalDuration 
  },
  onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset',
      (perimeter * timeRemaining) / duration1 - perimeter
    )
    
  }, 
  onComplete() {
    console.log('completed')

  }
})