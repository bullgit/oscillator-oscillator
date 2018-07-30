import getAudioContext from './AudioContext'

/**
 * Web Audio Oscillator Node Wrapper Class
 */
export default class OscillatorNode {

  constructor({type = "sine", freq = 440}) {
    const AC = getAudioContext()
    this.node = AC.createOscillator()
    this.node.type = type
    this.node.frequency.value = freq
    return this
  }

  set type(value) {
    this.node.type = value
  }

  get type() {
    return this.node.type
  }
  
  set freq(value) {
    return this.node.frequency.value = value
  }

  get freq() {
    return this.node.frequency.value
  }
}