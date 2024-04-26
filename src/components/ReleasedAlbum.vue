<template>
    <div class="albumContainer">
        <div class="albumArtContainer">
            <img class="albumArt" alt="albumArt" :src="albumArtURL"
                @click="goToLink(youtubeURL)" />
        </div>
        <h2 class="title">{{ title }}</h2>
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
</template>

<script>
export default {
    props: {
        albumArtURL: String,
        youtubeURL: String,
        title: String,
    },
    methods: {
        goToLink(link) {
            window.open(link, '_blank');
        }
    }
}
</script>

<style scoped>
.albumContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2%;
    flex-direction: column;
    width: 80%;
}

.albumArtContainer {
    width: max(30%, 500px);
    height: 0;
    padding-bottom: max(30%, 500px);
}

.albumArt {
    width: 100%;
    border-radius: 15px;
    cursor: pointer;
}

.title {
    font-size: 2.5vw;
    color: white;
    padding-top: 2%;
}

.subTitle {
    font-size: 1vw;
}

.iconsRow {
    padding-top: 1%;
    display: flex;
    width: 50%;
    justify-content: space-evenly;
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

.socialMediaIcon {
    font-size: 3vw;
}

@media only screen and (max-width: 900px) {
    .albumContainer {
        padding: 5%;
        width: 100%;
    }

    .albumArtContainer {
        width: 90%;
        padding-bottom: 90%;
    }

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
