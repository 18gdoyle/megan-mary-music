<template>
    <div class="albumContainer">
        <div class="albumArtContainer">
            <iframe src="https://www.youtube.com/embed/pmR4hziED5Y"
                title="Megan Mary - dark nights" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" class="albumArt" allowfullscreen>
            </iframe>
        </div>
        <div class="break"></div>
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
    width: 60vw;
    height: 60vh;
}

.break {
    height: 20px;
}

.albumArt {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    cursor: pointer;
}

.title {
    font-size: 70px;
    color: white;
    line-height: 125%;
}

.subTitle {
    font-size: 35px;
}

.iconsRow {
    padding-top: 1%;
    display: flex;
    width: 90%;
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
    width: 120px;
    aspect-ratio: 1;
}

.socialMediaIcon {
    font-size: 60px;
}

@media only screen and (max-width: 900px) {
    .albumContainer {
        padding: 5%;
        width: 100%;
    }

    .break {
        height: 10px;
    }

    .albumArtContainer {
        width: 90%;
        height: 40vh;
    }

    .albumArt {
        width: 100%;
        border-radius: 15px;
    }

    .title {
        font-size: 12vw;
    }

    .subTitle {
        font-size: 6vw;
    }

    .iconsRow {
        padding-top: 2%;
        width: 100%;
    }

    .socialMediaButton {
        width: 20vw;
        min-width: 70px;
    }

    .socialMediaIcon {
        font-size: 10vw;
    }
}
</style>
