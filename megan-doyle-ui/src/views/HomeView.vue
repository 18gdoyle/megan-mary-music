<script setup>
import Monkey from '../components/Monkey.vue'
</script>

<template>
  <div style="height: 100%; width: 100%;">
    <audio id="monkeyTime">
      <source src="/cycloneClipped.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <audio id="alarm">
      <source src="/alarm.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <div v-if="firstClick" style="display: flex; height: 100%; width: 100%; align-items: center; justify-content: center;">
      <h1>CLICK</h1>
    </div>
    <div v-else class="monkeyPlayground" id="monkeyPlayground">
      <h1>{{ monkeyCount }}</h1>
      <Monkey :id="'monkey1'" @monkeyKilled="monkeyKilled()" />
      <Monkey :id="'monkey2'" @monkeyKilled="monkeyKilled()" />
      <Monkey :id="'monkey3'" @monkeyKilled="monkeyKilled()" />
      <Monkey :id="'monkey4'" @monkeyKilled="monkeyKilled()" />
      <Monkey :id="'monkey5'" @monkeyKilled="monkeyKilled()" />
    </div>
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
    const audio = document.getElementById("monkeyTime"); 
    window.addEventListener('click', () => {
      if (this.firstClick) {
        audio.play();
        this.firstClick = false;
      }
    })
  },
  methods: {
    monkeyKilled() {
      this.monkeyCount--;
      if (this.monkeyCount === 0) {
        const audio = document.getElementById("monkeyTime"); 
        audio.pause();
        const alarmAudio = document.getElementById('alarm');
        alarmAudio.play();
      }
    }
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

