<script setup>
import MeganMusicLinks from '@/components/MeganMusicLinks.vue'
//import UnreleasedAlbum from '../components/UnreleasedAlbum.vue';
import ReleasedAlbum from '@/components/ReleasedAlbum.vue';
</script>

<template>
  <div class="page">
    <ReleasedAlbum :title="'dark nights'">
    </ReleasedAlbum>
    <!--
      <UnreleasedAlbum
        :albumArtURL="'/caterwaulAlbumArt.jpg'"
        :preSaveURL="'https://distrokid.com/hyperfollow/meganmary/caterwaul'"
        :title="'caterwaul'"
        :releaseDate="'AVAILABLE JUNE 7, 2024'"
      ></UnreleasedAlbum>
    -->
    <div class="gap"></div>
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

.gap {
  height: 60px;
}

@media only screen and (max-width: 900px) {
  .gap {
    height: 0px;
  }
}
</style>
