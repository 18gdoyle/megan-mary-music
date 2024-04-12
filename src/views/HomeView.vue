<script setup>
import MeganMusicLinks from '@/components/MeganMusicLinks.vue'
</script>

<template>
  <div class="page">
    <div class="albumContainer">
      <div class="albumArtContainer">
        <img class="albumArt" alt="albumArt" src="/mountainsAlbumArt.jpg"
          @click="goToLink('https://www.youtube.com/watch?v=qvedXSbiW0o')" />
      </div>
      <h2 class="title">MOUNTAINS</h2>
      <h3 class="subTitle">OUT NOW</h3>
      <div class="iconsRow">
        <a class="socialMediaButton"
          href="https://open.spotify.com/artist/13d4Uag9uB9ofYkls757GD?si=Dd1YU114SdeifPXeO_eOLw" target="_blank">
          <i class="fa-brands fa-spotify socialMediaIcon"></i>
        </a>
        <a class="socialMediaButton" href="https://music.apple.com/us/artist/megan-mary/1740023382" target="_blank">
          <i class="fa-brands fa-apple socialMediaIcon"></i>
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
  width: 100%;
  border-radius: 15px;
  cursor: pointer;
}

.albumArtContainer {
  width: max(30%, 500px);
  height: 0;
  padding-bottom: max(30%, 500px);
}

.albumContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  flex-direction: column;
  width: 80%;
}

.title {
  font-size: 2.5vw;
  color: white;
  padding-top: 2%;
}

.subTitle {
  font-size: 1vw;
}

.sectionTitle {
  font-size: 5vw;
  color: white;
  padding: 2%;
}

.socialMediaIcon {
  font-size: 3vw;
}

.socialMediaButton {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100vh;
  background-color: #ffffff26;
  backdrop-filter: blur(5px);
  text-align: center;
  color: #fff;
  cursor: pointer;
  width: 5vw;
  aspect-ratio: 1;
}

.iconsRow {
  padding-top: 1%;
  display: flex;
  width: 50%;
  justify-content: space-evenly;
}

@media only screen and (max-width: 900px) {
  .albumArt {
    width: 100%;
    border-radius: 15px;
  }

  .title {
    font-size: 8vw;
  }

  .subTitle {
    font-size: 4vw;
  }

  .albumArtContainer {
    width: 90%;
    padding-bottom: 90%;
  }

  .albumContainer {
    padding: 5%;
    width: 100%;
  }

  .sectionTitle {
    font-size: 18vw;
  }

  .iconsRow {
    padding-top: 5%;
    width: 100%;
  }

  .socialMediaButton {
    width: 8vh
  }

  .socialMediaIcon {
    font-size: 4vh;
  }
}
</style>
