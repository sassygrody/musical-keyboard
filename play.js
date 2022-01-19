const keyCodes = [
  { code: 'a', freq: 130.81 },
  { code: 'b', freq: 2093.0 },
  { code: 'c', freq: 2349.32 },
  { code: 'd', freq: 2637.02 },
  { code: 'e', freq: 2793.83 },
  { code: 'f', freq: 392.0 },
  { code: 'g', freq: 440.0 },
  { code: 'h', freq: 329.0 },
  { code: 'i', freq: 523.25 },
  { code: 'j', freq: 587.33 },
  { code: 'k', freq: 659.26 },
  { code: 'l', freq: 698.46 },
  { code: 'm', freq: 783.99 },
  { code: 'n', freq: 880.0 },
  { code: 'o', freq: 987.77 },
  { code: 'p', freq: 1046.5 },
  { code: 'q', freq: 1174.66 },
  { code: 'r', freq: 1318.51 },
  { code: 's', freq: 220.0 },
  { code: 't', freq: 1567.98 },
  { code: 'u', freq: 1760.0 },
  { code: 'v', freq: 1975.53 },
  { code: 'w', freq: 2093.0 },
  { code: 'x', freq: 2349.32 },
  { code: 'y', freq: 2637.02 },
  { code: 'z', freq: 2793.83 }
]

function playInConsole(frequency, type = 'triangle') {
  console.log('frequency:', frequency)
  let context = new AudioContext()
  let o = context.createOscillator()
  let g = context.createGain()
  o.type = type
  o.connect(g)
  o.frequency.value = frequency
  g.connect(context.destination)
  o.start(0)
  g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
  console.log('playing')
  console.log('oscilator', o)
}

function playWhileTyping() {}
window.addEventListener('keydown', event => {
  if (event.key === 32) {
    return null
  }

  Object.keys(keyCodes).forEach(key => {
    let value = keyCodes[key]

    if (event.key === value.code) {
      playInConsole(value.freq)
    }
  })
})
