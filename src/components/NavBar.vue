<template>
    <div class="menu-items">
        <li><a href="/">Home</a></li>
        <li><a href="/music">Music</a></li>
        <li><a href="/merch">Merch</a></li>
        <li><a href="/monkey">Monkey</a></li>
    </div>
    <div id="navBar" class="navbar">
        <div class="nav-container">
            <input @click="showOrHideMobileNav" class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
        </div>
        <div id="title">
            <a href="/">Megan Mary</a>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        showOrHideMobileNav() {
            let menuItems = document.getElementsByClassName('menu-items')[0];
            if (menuItems.style.transform === '') {
                menuItems.style.transform = 'translateX(0)';
            } else {
                menuItems.style.transform = '';
            }
        }
    }
}
</script>

<style scoped>
#navBar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: max(8vh, 50px);
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    z-index: 10;
}

#title {
    color: white;
    font-size: xx-large;
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    padding-right: 20px;
}

.nav-container {
    display: block;
    position: relative;
    height: 60px;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
    color: white;
}

.nav-container .checkbox {
    position: absolute;
    display: block;
    height: 32px;
    width: 32px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
}

.nav-container .hamburger-lines {
    display: block;
    height: 26px;
    width: 32px;
    position: absolute;
    top: 17px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.nav-container .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: white;
}

.nav-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
}

.nav-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
}

.nav-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
}

.nav-container input[type="checkbox"]:checked~.menu-items {
    transform: translateX(0);
}

.nav-container input[type="checkbox"]:checked~.hamburger-lines .line1 {
    transform: rotate(45deg);
}

.nav-container input[type="checkbox"]:checked~.hamburger-lines .line2 {
    transform: scaleY(0);
}

.nav-container input[type="checkbox"]:checked~.hamburger-lines .line3 {
    transform: rotate(-45deg);
}

.nav-container input[type="checkbox"]:checked~.logo {
    display: none;
}

.menu-items {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: max(70px, 9vh);
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(15px);
    height: 100%;
    width: 20vw;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    transition: transform 0.5s ease-in-out;
    z-index: 10;
}

.menu-items li {
    margin-bottom: 1.2rem;
    font-size: 1.5rem;
    font-weight: 500;
}

@media only screen and (max-width: 600px) {
    .menu-items {
        width: 50%;
    }

    #title {
        padding-right: 10px;
    }

    .nav-container .hamburger-lines {
        left: 10px;
    }
}
</style>
