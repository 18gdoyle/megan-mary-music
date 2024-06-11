<template>
    <div class="profileImageContainer">
        <img src="/meganProfile.jpg" alt="meganProfile" class="profileImage" />
    </div>
    <div class="iconsRow">
        <a class="socialMediaButton" href="https://www.tiktok.com/@megan..mary" target="_blank">
            <i class="fa-brands fa-tiktok socialMediaIcon centered"></i>
        </a>
        <a class="socialMediaButton" href="mailto:meganmarymusicbiz@gmail.com" target="_blank">
            <i class="fa-regular fa-envelope socialMediaIcon centered"></i>
        </a>
        <a class="socialMediaButton" href="https://www.instagram.com/meganmarymusic/" target="_blank">
            <i class="fa-brands fa-instagram socialMediaIcon centered"></i>
        </a>
    </div>
    <div class="buttonsContainer">
        <a class="socialMediaButtonLong"
            href="https://open.spotify.com/artist/13d4Uag9uB9ofYkls757GD?si=Dd1YU114SdeifPXeO_eOLw" target="_blank">
            <i class="fa-brands fa-spotify socialMediaIcon"></i>
            <p class="siteTitle">SPOTIFY</p>
            <i class="fa-brands fa-spotify socialMediaIcon"></i>
        </a>
        <a class="socialMediaButtonLong" href="https://music.apple.com/us/artist/megan-mary/1740023382" target="_blank">
            <i class="fa-brands fa-apple socialMediaIcon"></i>
            <p class="siteTitle">APPLE MUSIC</p>
            <i class="fa-brands fa-apple socialMediaIcon"></i>
        </a>
        <a class="socialMediaButtonLong" href="https://www.youtube.com/@MeganMaryMusic" target="_blank">
            <i class="fa-brands fa-youtube socialMediaIcon"></i>
            <p class="siteTitle">YOUTUBE</p>
            <i class="fa-brands fa-youtube socialMediaIcon"></i>
        </a>
        <a class="socialMediaButtonLong" href="https://soundcloud.com/megan-mary-music" target="_blank">
            <i class="fa-brands fa-soundcloud socialMediaIcon"></i>
            <p class="siteTitle">SOUNDCLOUD</p>
            <i class="fa-brands fa-soundcloud socialMediaIcon"></i>
        </a>
    </div>
</template>

<style scoped>
.profileImage {
    border-radius: 50%;
    margin: auto;
    display: inline;
    width: 500px;
    box-shadow: 20px 20px 22px rgba(0, 0, 0, .2);
}

.profileImageContainer {
    margin: auto;
    display: inline;
}

.buttonsContainer {
    width: 80%;
    margin-bottom: 5%;
}

.socialMediaButtonLong {
    display: flex;
    justify-content: space-between;
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
    margin-top: 5%;
    overflow: hidden;
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

.iconsRow {
    padding-top: 2%;
    display: flex;
    width: 90%;
    justify-content: center;
    gap: 10vw;
}

.centered {
    width: 100%;
    text-align: center;
    margin: auto;
}

.socialMediaIcon {
    font-size: 60px;
}

.siteTitle {
    font-size: 50px;
}

@media only screen and (max-width: 900px) {
    .buttonsContainer {
        width: 94%;
    }

    .profileImage {
        width: 100%;
        padding-top: 5%;
    }

    .profileImageContainer {
        width: 70%;
    }

    .iconsRow {
        padding-top: 5%;
        width: 100%;
    }

    .socialMediaButton {
        width: 20vw;
        min-width: 70px;
    }

    .socialMediaIcon {
        font-size: 10vw;
    }

    .siteTitle {
        font-size: max(20px, 5vw);
    }
}
</style>