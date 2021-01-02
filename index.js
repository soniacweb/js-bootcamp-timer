const duration = document.querySelector('#duration')
const startb = document.querySelector('#start')
const pause = document.querySelector('#pause')

const circle = document.querySelector('circle')
const perimeter = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray', perimeter)
let currentOffset = 0

//creating a new instance of the object
const timer = new Timer(duration, startb, pause, {
  onStart() {
    console.log('started')
  },
  onTick() {
    circle.setAttribute('stroke-dashoffset', currentOffset)
    currentOffset = currentOffset - 50
  }, 
  onComplete() {
    console.log('completed')

  }
})