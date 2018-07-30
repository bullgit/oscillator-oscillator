const context = new AudioContext()
console.log("AudioContext state: ", context.state)

export default function getAudioContext() {
  if (context.state === "suspended") {
    context.resume()
  }
  return context
}