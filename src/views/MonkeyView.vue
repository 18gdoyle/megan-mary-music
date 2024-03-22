<script setup>
import Monkey from '../components/Monkey.vue'
</script>

<template>
  <div style="height: 92vh; width: 100%; margin-top: 8vh; cursor: pointer;">
    <audio id="monkeyTime">
      <source src="/cycloneClipped.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <audio id="alarm">
      <source src="/alarm.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <div v-if="firstClick" style="display: flex; height: 100%; width: 100%; align-items: center; justify-content: center;">
      <h1>READY? CLICK!</h1>
    </div>
    <div v-else class="monkeyPlayground" id="monkeyPlayground">
        <div style="height: 100%; width: 100%; display: flex; align-items: center; justify-content: center;">
            <h1 style="font-size: 5000%;">{{ monkeyCount }}</h1>
        </div>
        <div v-if="gameWon" style="height: 100%; width: 100%; position: absolute; top: 0; left: 0; display: flex; align-items: center; justify-content: center; flex-direction: column;">
                <div>
                    You Win
                </div>
                <br />
                <audio controls id="secretSong">
                    <source src="/SCREAMER.mp3" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
        </div>
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
      firstClick: true,
      gameWon: false
    }
  },
  mounted() {
    const audio = document.getElementById("monkeyTime");
    window.addEventListener('click', () => {
      if (this.firstClick) {
        audio.play();
        this.firstClick = false;
      }
    });
    window.addEventListener('touchstart', () => {
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
        this.gameWon = true;
        const audio = document.getElementById("monkeyTime"); 
        audio.pause();
        //const alarmAudio = document.getElementById('alarm');
        //alarmAudio.play();
      }
    },
  }
}
</script>

<style>
.monkeyPlayground {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>

