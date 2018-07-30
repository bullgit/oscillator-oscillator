<template>
<h1>{{msg}}</h1>
</template>
<style>
body {
  color: green;
}
</style>
<script>
import OscillatorNode from '../classes/OscillatorNode'
import GainNode from '../classes/GainNode'

export default {
  name: 'app',
  data () {
    return {
      nodes: [],
      msg: 'Hello World!'
    }
  }
}
</script>