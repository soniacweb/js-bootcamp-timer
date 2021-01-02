const duration = document.querySelector('#duration')
const startb = document.querySelector('#start')
const pause = document.querySelector('#pause')

//creating a new instance of the object
const timer = new Timer(duration, startb, pause, {
  onStart() {
    console.log('started')
  },
  onTick() {
    console.log('ticked')

  }, 
  onComplete() {
    console.log('completed')

  }
})