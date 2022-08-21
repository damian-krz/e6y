<template>
<vue-typed-js :strings="['awesome', 'brilliant']" :loop="true" @onComplete="doSmth()" class="test">
  <h2>We are a <span class="typing"></span> company!</h2>
</vue-typed-js>
<div class="blueScreen">
    <router-link class="navigation--button" :to="{ name: 'Home' }">
        <img class="logo" src="../assets/logo.png" alt="logo">
    </router-link>
</div>
    <div class="background">
            <div v-for="image in images" :key="image.url" class="gallery" >
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__img active niewiadomo">
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__img">
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__img">
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__img">
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__img">
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__img">
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__img">
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__img">
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__img">
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__img">
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__img">
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__img">
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__img">
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__img">
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__img">
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__img">
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__img">
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__img">
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__img">
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__img">
            </div>
            <div class="xdContent">
                <img :src="getImgUrl(xd[0].url)" :alt="xd.alt" class="xd" @click="blueScreen(); getImageBgc();">
            </div>
    </div>
</template>

<script>
import VueTypedJs from 'vue-typed-js';
export default {
    name: 'AboutUs',
    data() {
        return {
            colors: [
                { color: 'red' },
                { color: 'green' },
            ],
            images: [
                { url: 'niewiadomoRed.png', alt: 'eyyyyyy' },
            ],
            xd: [
                { url: 'XD.png', alt: 'XD' },
                { url: 'XDRed.jpg', alt: 'XD' }
            ],
            imagesOnChange: [
                { url: 'niewiadomoBlack.jpeg', alt: 'eyyyyyy' },
                { url: 'niewiadomoGreen.jpeg', alt: 'eyyyyyy' },
                { url: 'niewiadomoOrange.jpeg', alt: 'eyyyyyy' },
                { url: 'niewiadomoBlue.jpeg', alt: 'eyyyyyy' },
                { url: 'niewiadomoPink.jpeg', alt: 'eyyyyyy' },
                { url: 'niewiadomoPurple.jpeg', alt: 'eyyyyyy' },
                { url: 'niewiadomoYellow.jpeg', alt: 'eyyyyyy' },
                { url: 'niewiadomoWhite.jpeg', alt: 'eyyyyyy' },
            ],
        }
    },

    mounted() {
        console.log(VueTypedJs);
        let niewiadomo = document.querySelector('.niewiadomo');
        let gallery = document.querySelector('.gallery');
        let xd = document.querySelector('.xd');

        niewiadomo.addEventListener('mouseover', () => {
            gallery.childNodes.forEach(e => {
                e.classList.add('active'); 
            });
            xd.classList.add('active');
        });
    },

    unmounted() {
        this.$store.state.blueScreenCount = 5;
        this.$store.state.imageBgcCount = 5;
    },

    methods: {
        getImageBgc: function() {
            let background = document.querySelector('.background');
            this.$store.dispatch("getImageBgc");
            let count = this.$store.state.imageBgcCount;

            switch(count) {
                case 4:
                    background.style.backgroundImage = `url(${this.getImgUrl(this.imagesOnChange[4].url)})`;
                    break;
                case 3:
                    background.style.backgroundImage = `url(${this.getImgUrl(this.imagesOnChange[5].url)})`;
                    break;
                case 2:
                    background.style.backgroundImage = `url(${this.getImgUrl(this.imagesOnChange[6].url)})`;
                    break;
                case 1:
                    background.style.backgroundImage = `url(${this.getImgUrl(this.imagesOnChange[7].url)})`;
                    break;
            }
        },
        getImgUrl: function (imagePath) {
            return require('@/assets/aboutUs/' + imagePath);
        },
        getBlueUrl: function (blueSound) {
            return require('@/assets/aboutUs/' + blueSound);
        },
        blueScreen: function() {
            let blueScreen = document.querySelector('.blueScreen');
            let background = document.querySelector('.background');
            let xd = document.querySelector('.xd');
            let gallery__img = document.querySelectorAll('.gallery__img');
            this.$store.dispatch("blueScreen");
            let count = this.$store.state.blueScreenCount;

            switch(count) {
                case 4:
                gallery__img.forEach(e => {
                    e.setAttribute("src", this.getImgUrl(this.imagesOnChange[3].url));
                });
                    break;
                case 3:
                gallery__img.forEach(e => {
                    e.setAttribute("src", this.getImgUrl(this.imagesOnChange[2].url));
                });
                    break;
                case 2:
                gallery__img.forEach(e => {
                    e.setAttribute("src", this.getImgUrl(this.imagesOnChange[1].url));
                });
                    break;
                case 1:
                gallery__img.forEach(e => {
                    e.setAttribute("src", this.getImgUrl(this.imagesOnChange[0].url));
                });
                    break;
                case 0: 
                    xd.setAttribute("src", this.getImgUrl(this.xd[1].url));
                    blueScreen.classList.add('activeBlueScreen');
                    const move = () => {
                        window.scrollTo(0, 0);
                        background.style.height = '0';
                        
                    };
                    let snd = new Audio(this.getBlueUrl('blueScreen.wav'));
                    snd.play();
                    const scrollToBlueScreen = setTimeout(move, 1000);
                    break;
            }
        }
    }
}

</script>

<style lang="scss" scoped>
.logo {
    animation: rotation 2s infite linear;
}

@keyframes rotation {
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotaterY(180deg);
    }
}

.typing {
    z-index: 10000;
    position: relative;
    color: white;
}
.test {
    position: absolute;
    left: 0;
    width: 100vw;
    height: 10rem;
    top: 8rem;

}
.typing {
    position: absolute;
    top: 8rem;
    left: 0;
    width: 100vw;
    height: 200px; 
    color: white;
    z-index: 1000;
}
    .gallery {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &__img {
            display: none;
        }
        &__img:nth-child(1) {
            width: 100%;
        }
        &__img:nth-child(2) {
            width: 95%;
        }
        &__img:nth-child(3) {
            width: 90%;
        }
        &__img:nth-child(4) {
            width: 85%;
        }
        &__img:nth-child(5) {
            width: 80%;
        }
        &__img:nth-child(6) {
            width: 75%;
        }
        &__img:nth-child(7) {
            width: 70%;
        }
        &__img:nth-child(8) {
            width: 65%;
        }
        &__img:nth-child(9) {
            width: 60%;
        }
        &__img:nth-child(10) {
            width: 55%;
        }
        &__img:nth-child(11) {
            width: 50%;
        }
        &__img:nth-child(12) {
            width: 45%;
        }
        &__img:nth-child(13) {
            width: 40%;
        }
        &__img:nth-child(14) {
            width: 35%;
        }
        &__img:nth-child(15) {
            width: 30%;
        }
        &__img:nth-child(16) {
            width: 25%;
        }
        &__img:nth-child(17) {
            width: 20%;
        }
        &__img:nth-child(18) {
            width: 15%;
        }
        &__img:nth-child(19) {
            width: 10%;
        }
        &__img:nth-child(20) {
            width: 5%;
        }
    }

    .xdContent {
        display: flex;
        justify-content: center;
    }

    .xd {
        width: 5%;
        display: none;
        cursor: pointer;
    }

    .background {
        margin-top: 8rem;
        position: relative;
        background-image: url('../assets/aboutUs/niewiadomoRed.png');
    }
    
    .blueScreen {
        display: none;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100vh;
        background-color: #050392;
        z-index: 99999; 
    }

    .activeBlueScreen {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }

    .active {
        display: block;
    }
</style>