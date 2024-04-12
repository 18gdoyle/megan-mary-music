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
        <a class="socialMediaButton" href="https://www.instagram.com/megan0mary/" target="_blank">
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
    width: 100%;
    box-shadow: 20px 20px 22px rgba(0, 0, 0, .2);
}

.profileImageContainer {
    width: 20%;
    height: 0;
    padding-bottom: 20%;
    margin: auto;
    display: inline;
}

.buttonsContainer {
    width: 50%;
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
    width: 5vw;
    aspect-ratio: 1;
}

.iconsRow {
    padding-top: 2%;
    display: flex;
    width: 50%;
    justify-content: space-evenly;
}

.centered {
    width: 100%;
    text-align: center;
    margin: auto;
}

.socialMediaIcon {
    font-size: 3vw;
}

.siteTitle {
    font-size: 2vw
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
        padding-bottom: 70%;
    }

    .iconsRow {
        padding-top: 10%;
        width: 100%;
    }

    .socialMediaButton {
        width: 8vh
    }

    .socialMediaIcon {
        font-size: 4vh;
    }

    .siteTitle {
        font-size: 5vw
    }
}
</style>