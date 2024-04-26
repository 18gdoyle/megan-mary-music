<script setup>
import MeganMusicLinks from '@/components/MeganMusicLinks.vue'
import UnreleasedAlbum from '../components/UnreleasedAlbum.vue';
</script>

<template>
  <div class="page">
    <UnreleasedAlbum
      :albumArtURL="'/caterwaulAlbumArt.jpg'"
      :preSaveURL="'https://distrokid.com/hyperfollow/meganmary/caterwaul'"
      :title="'caterwaul'"
      :releaseDate="'AVAILABLE JUNE 7, 2024'"
    ></UnreleasedAlbum>
    <MeganMusicLinks></MeganMusicLinks>
  </div>
</template>

<style scoped>
.page {
  margin-top: max(8vh, 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 900px) {}
</style>
