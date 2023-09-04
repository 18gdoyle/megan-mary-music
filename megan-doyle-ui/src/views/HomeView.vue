<script setup>
import Monkey from '../components/Monkey.vue'
</script>

<template>
  <div class="monkeyPlayground" id="monkeyPlayground">
    <audio id="myAudio">
      <source src="../assets/cyclone clipped.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>

    <h1>{{ monkeyCount }}</h1>
    <Monkey :id="'monkey1'" @monkeyKilled="monkeyCount = monkeyCount - 1" />
    <Monkey :id="'monkey2'" @monkeyKilled="monkeyCount = monkeyCount - 1" />
    <Monkey :id="'monkey3'" @monkeyKilled="monkeyCount = monkeyCount - 1" />
    <Monkey :id="'monkey4'" @monkeyKilled="monkeyCount = monkeyCount - 1" />
    <Monkey :id="'monkey5'" @monkeyKilled="monkeyCount = monkeyCount - 1" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      monkeyCount: 5,
      firstClick: true
    }
  },
  mounted() {
    var x = document.getElementById("myAudio"); 
    window.addEventListener('click', () => {
      if (this.firstClick) {
        x.play();
        this.firstClick = false;
      }
    })
  },
  methods: {

  }
}
</script>

<style>
.monkeyPlayground {
  height: 99%;
  width: 99%;
  overflow: hidden;
}
</style>

