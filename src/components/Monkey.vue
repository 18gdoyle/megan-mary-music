<template>
    <main>
        <img class="monkey" alt="monkey" :id="id" style="position: absolute;" :style="{ left: `${x}px`, top: `${y}px` }" />
    </main>
</template>

<script>
export default {
    props: {
        id: String
    },
    data() {
        return {
            x: 0,
            y: 0,
            verticalDirection: 1,
            horizontalDirection: 1,
            monkeyHeight: 0,
            monkeyWidth: 0,
            monkeyPlaygroundTop: 0,
            monkeyPlaygroundBottom: 0,
            monkeyPlaygroundRight: 0,
            monkeyPlaygroundLeft: 0
        }
    },
    mounted() {
        this.getPlaygroundDimensions();

        const monkey = document.getElementById(this.id);
        monkey.onload = () => {
            this.x = this.getRandomInt(this.monkeyPlaygroundBottom - monkey.height);
            this.y = this.getRandomInt(this.monkeyPlaygroundRight - monkey.width);
            this.animateMonkey(monkey);
        }
        monkey.src = '/monkey1.png'

        setInterval(() => {
            let random = this.getRandomInt(100);
            if (random <= 33) {
                this.verticalDirection = 1;
            } else if (random <= 66) {
                this.verticalDirection = this.verticalDirection = -1;
            } else {
                this.verticalDirection = 0;
            }

            random = this.getRandomInt(100);
            if (random <= 33) {
                this.horizontalDirection = 1;
            } else if (random <= 66) {
                this.horizontalDirection = -1;
            } else {
                this.horizontalDirection = 0;
            }
        }, 1000);

        window.addEventListener('click', (event) => {
            if (event.x >= this.x && event.x <= this.x + this.monkeyWidth &&
                event.y >= this.y && event.y <= this.y + this.monkeyHeight
            ) {
                this.killMonkey(this.id);
            }
        })

        window.addEventListener('touchstart', (event) => {
            if (event.x >= this.x && event.x <= this.x + this.monkeyWidth &&
                event.y >= this.y && event.y <= this.y + this.monkeyHeight
            ) {
                this.killMonkey(this.id);
            }
        })

        window.addEventListener('resize', (event) => {
            this.getPlaygroundDimensions();
        })
    },
    methods: {
        flyMonkey() {
            if (this.y + this.monkeyHeight + 20 > this.monkeyPlaygroundBottom) {
                this.verticalDirection = -1
            }

            if (this.y -20 < this.monkeyPlaygroundTop) {
                this.verticalDirection = 1;
            }

            if (this.x + this.monkeyWidth + 20 > this.monkeyPlaygroundRight) {
                this.horizontalDirection = -1;
            }

            if (this.x- 20 < this.monkeyPlaygroundLeft) {
                this.horizontalDirection = 1;
            }
            this.x = this.x + (this.horizontalDirection * 15);
            this.y = this.y + (this.verticalDirection * 15);
        },
        animateMonkey(monkey) {
            this.monkeyHeight = monkey.height;
            this.monkeyWidth = monkey.width;
            setInterval(() => {
                this.flyMonkey();
            }, 20)
        },
        getRandomInt(max) {
            return Math.floor(Math.random() * max);
        },
        killMonkey() {
            const monkey = document.getElementById(this.id);
            monkey.remove();
            this.$emit('monkeyKilled');
        },
        getPlaygroundDimensions() {
            const monkeyPlayground = document.getElementById('monkeyPlayground');
            this.monkeyPlaygroundTop = monkeyPlayground.offsetTop;
            this.monkeyPlaygroundBottom = monkeyPlayground.offsetTop + monkeyPlayground.offsetHeight;
            this.monkeyPlaygroundLeft = monkeyPlayground.offsetLeft;
            this.monkeyPlaygroundRight = monkeyPlayground.offsetLeft + monkeyPlayground.offsetWidth;
        }
    }
}
</script>

<style scoped>
.monkey {
    height: 15%;
}
</style>