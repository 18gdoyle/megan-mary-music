<script setup>
import Monkey from '../components/Monkey.vue'
</script>

<template>
  <div class="monkeyPlayground" id="monkeyPlayground">
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
    }
  },
  mounted() {

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

