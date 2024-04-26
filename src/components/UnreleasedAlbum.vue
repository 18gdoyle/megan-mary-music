<template>
    <div class="albumContainer">
        <div class="albumArtContainer">
            <img class="albumArt" alt="albumArt" :src="albumArtURL" @click="goToLink(preSaveURL)" />
        </div>
        <h2 class="title">{{ title }}</h2>
        <h3 class="subTitle">{{ releaseDate }}</h3>
        <div class="iconsRow">
            <a class="socialMediaButtonLong"
                :href="preSaveURL" target="_blank">
                <p class="siteTitle">PRE-SAVE NOW</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        albumArtURL: String,
        preSaveURL: String,
        title: String,
        releaseDate: String,
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
    font-size: max(40px, 4vw);
    color: white;
}

.subTitle {
    font-size: max(15px, 1vw);
}

.iconsRow {
    padding-top: 1%;
    display: flex;
    width: 50%;
    justify-content: space-evenly;
}

.socialMediaButtonLong {
    display: flex;
    justify-content: center;
    border-radius: 100vh;
    width: 100%;
    gap: 1%;
    background-color: #ffffff26;
    backdrop-filter: blur(5px);
    text-align: center;
    align-items: center;
    color: #fff;
    padding: 2%;
    padding-left: 5%;
    padding-right: 5%;
    overflow: hidden;
}

.siteTitle {
    font-size: max(20px, 2vw)
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
        font-size: 3vw;
    }

    .iconsRow {
        width: 100%;
    }

    .socialMediaButton {
        width: 8vh
    }

    .socialMediaIcon {
        font-size: 4vh;
    }

    .siteTitle {
        font-size: 4vw
    }
}
</style>
