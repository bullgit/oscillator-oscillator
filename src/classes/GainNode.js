import getAudioContext from './AudioContext'

export default class GainNode {

  constructor({gain = 1.0}) {
    const AC = getAudioContext()
    this.node = AC.createGain()
    this.node.gain.value = gain
  }

  get gain() {
    return this.node.gain.value
  }
  
  set gain(value) {
    this.node.gain.value = value
  }

}