<template>
    <img src="/meganProfile.jpg" class="profileImage" />
    <div class="buttonsContainer">
        <a class="socialMediaButtonLong" href="https://www.youtube.com/channel/UCRtWYgXZ6n9Q5Jl__LrL5JQ"
            target="_blank">
            <i class="fa-brands fa-youtube socialMediaIcon"></i>
            <p class="siteTitle">YOUTUBE</p>
            <i class="fa-brands fa-youtube socialMediaIcon"></i>
        </a>
        <a class="socialMediaButtonLong" href="https://soundcloud.com/lilac-rust" target="_blank">
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
    width: 20%;
    box-shadow: 20px 20px 22px rgba(0, 0, 0, .2);
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

.socialMediaIcon {
    font-size: 200%;
}

.siteTitle {
    font-size: xx-large;
}

@media only screen and (max-width: 600px) {
    .buttonsContainer {
        width: 94%;
    }

    .profileImage {
        width: 60%;
        padding-top: 5%;
    }
}
</style>