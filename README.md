# js-bootcamp-timer

First project in the Modern JS bootcamp.

Psuedo code: 

<img src="./Screenshot 2021-01-01 at 00.52.17.png" />

<img src="./Screenshot 2021-01-01 at 00.57.59.png" />

JS topics covered: 

- Class based implentation
- Dom manipulation
- Logic
- Binding Events in a Class based function
- 'This' key word
- Events

# Creating a Class Timer and start method:

```
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

```

# Selecting HTML elements using querySelector

```

const duration = document.querySelector('#duration')
const start = document.querySelector('#start')
const pause = document.querySelector('#pause')

```
