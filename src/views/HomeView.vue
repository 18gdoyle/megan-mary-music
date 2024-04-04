<script setup>
import MeganMusicLinks from '@/components/MeganMusicLinks.vue'
</script>

<template>
  <div class="page">
    <div class="albumContainer">
      <img class="albumArt" src="/mountainsAlbumArt.jpg"
        @click="goToLink('https://www.youtube.com/watch?v=qvedXSbiW0o')" />
      <h2 class="title">MOUNTAINS</h2>
      <h3 class="subTitle">OUT NOW</h3>
      <div class="iconsRow">
        <a class="socialMediaButton" href="https://www.tiktok.com/@megan..mary" target="_blank">
          <i class="fa-brands fa-tiktok socialMediaIcon"></i>
        </a>
        <a class="socialMediaButton" href="https://www.instagram.com/megan0mary/" target="_blank">
          <i class="fa-brands fa-instagram socialMediaIcon"></i>
        </a>
        <a class="socialMediaButton" href="https://www.youtube.com/@MeganMaryMusic" target="_blank">
          <i class="fa-brands fa-youtube socialMediaIcon"></i>
        </a>
        <a class="socialMediaButton" href="https://soundcloud.com/megan-mary-music" target="_blank">
          <i class="fa-brands fa-soundcloud socialMediaIcon"></i>
        </a>
      </div>
    </div>
    <MeganMusicLinks></MeganMusicLinks>
  </div>
</template>

<script>
export default {
  methods: {
    goToLink(link) {
      window.open(link, '_blank');
    }
  }
}
</script>

<style scoped>
.page {
  margin-top: max(8vh, 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.albumArt {
  width: 30%;
  border-radius: 40px;
  cursor: pointer;
}

.albumContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  flex-direction: column;
}

.title {
  font-size: xx-large;
  color: white;
  padding-top: 2%;
}

.sectionTitle {
  font-size: 5vw;
  color: white;
  padding: 2%;
}

.socialMediaIcon {
  font-size: 300%;
  margin: auto;
}

.socialMediaButton {
  height: 10vh;
  width: 10vh;
  display: flex;
  justify-content: center;
  border-radius: 100vh;
  background-color: #ffffff26;
  backdrop-filter: blur(5px);
  text-align: center;
  color: #fff;
  cursor: pointer;
}

.iconsRow {
  padding-top: 1%;
  display: flex;
  width: 50%;
  justify-content: space-evenly
}

@media only screen and (max-width: 600px) {
  .albumArt {
    width: 80%;
    border-radius: 15px;
  }

  .albumContainer {
    padding: 5%;
  }

  .sectionTitle {
    font-size: 18vw;
  }

  .iconsRow {
    padding-top: 5%;
    width: 100%;
  }

  .socialMediaButton {
    height: 8vh;
    width: 8vh;
  }

  .socialMediaIcon {
    font-size: 200%;
  }
}
</style>
