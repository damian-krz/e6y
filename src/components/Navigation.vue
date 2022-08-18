<template>
<div>
    <router-link :to="{ name: 'Login' }" v-show="!mobile">
        <img class="logo" src="../assets/logo.png" alt="logo">
    </router-link>
    <nav class="navigation">
        <ul class="navigation--list" v-show="!mobile">
            <li class="navigation--item">
                <router-link class="navigation--button menu" :to="{ name: 'Home' }"><span>H</span><span>o</span><span>m</span><span>e</span><span>P</span><span>a</span><span>g</span><span>e</span></router-link>
            </li>
            <li class="navigation--item">
                <router-link class="navigation--button menu" :to="{ name: 'NetArtGallery' }">net.art.gallery</router-link>
            </li>
            <li class="navigation--item">
                <a class="navigation--button menu" target="_blank" href="https://www.instagram.com/eyyyyyy.store/">Shop</a>
            </li>
            <li class="navigation--item">
                <router-link class="navigation--button menu" :to="{ name: 'Blog' }">Blog</router-link>
            </li>
            <li class="navigation--item">
                <router-link class="navigation--button menu" :to="{ name: 'AboutUs' }">About Us</router-link>
            </li>
            <li class="navigation--item">
                <a class="navigation--button menu" target="_blank" href="https://www.instagram.com/eyyyyyy.pl/">Insta</a>
            </li>
        </ul>
    </nav>
    <p @click="toggleMobileNav" class="hamburgerButton" v-show="mobile">E6Y-hamburger</p>
    <transition name="navigationMobile">
        <ul class="navigation--list-mobile" v-show="mobileNav">
            <li class="navigation--item" @click="toggleMobileNav">
                <router-link class="navigation--button" :to="{ name: 'Login' }">Login/Register</router-link>
            </li>
            <li class="navigation--item" @click="toggleMobileNav">
                <router-link class="navigation--button" :to="{ name: 'Home' }"><span>H</span><span>o</span><span>m</span><span>e</span><span>P</span><span>a</span><span>g</span><span>e</span></router-link>
            </li>
            <li class="navigation--item" @click="toggleMobileNav">
                <router-link class="navigation--button menu" :to="{ name: 'NetArtGallery' }">net.art.gallery</router-link>
            </li>
            <li class="navigation--item" @click="toggleMobileNav">
                <a class="navigation--button menu" target="_blank" href="https://www.instagram.com/eyyyyyy.store/">Shop</a>
            </li>
            <li class="navigation--item" @click="toggleMobileNav">
                <router-link class="navigation--button menu" :to="{ name: 'Blog' }">Blog</router-link>
            </li>
            <li class="navigation--item" @click="toggleMobileNav">
                <router-link class="navigation--button menu" :to="{ name: 'AboutUs' }">About Us</router-link>
            </li>
            <li class="navigation--item">
                <a class="navigation--button menu" target="_blank" href="https://www.instagram.com/eyyyyyy.pl/">Insta</a>
            </li>
        </ul>
    </transition>
</div>
</template>

<script>

export default {
    name: 'Navigation',

    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        };
    },

    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },

    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 900) {
                this.mobile = true;
                return;
            };
            this.mobile = false;
            this.mobileNav = false;
            return;
        },

        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
    },

    mounted() {
        const navbar = document.querySelector('.navigation');
        window.onscroll = () => {
            if (window.scrollY > 500) {
                navbar.classList.add('nav-active');
            } else {
                navbar.classList.remove('nav-active');
            }
        };
    },
}
</script>

<style scoped lang="scss">
    .navigation {
        background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,51,255,1) 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 2;
        font-size: 1rem;
        min-height: 8rem;

        &--list {
            list-style: none;
            display: flex;
            justify-content: space-around;
            align-items: center;

            &-mobile {
                background-color: white;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                list-style: none;
                position: fixed;
                top: 0;
                height: 100%;
                width: 100%;
                z-index: 3;
                font-size: 14px;
            }
        }

        &--item {
            padding: 1rem;
        }

        &--button {
            cursor: pointer;
            padding: 2rem 1rem;
            text-decoration: none;
            color: black;

            &:focus {
                position: relative;
                outline: 1px solid transparent;
                animation: animate .7s infinite;
            }
        }
    }   

    .nav-active {
        background: linear-gradient(
            90deg,
            rgba(255, 0, 0, 1) 0%,
            rgba(255, 154, 0, 1) 10%,
            rgba(208, 222, 33, 1) 20%,
            rgba(79, 220, 74, 1) 30%,
            rgba(63, 218, 216, 1) 40%,
            rgba(47, 201, 226, 1) 50%,
            rgba(28, 127, 238, 1) 60%,
            rgba(95, 21, 242, 1) 70%,
            rgba(186, 12, 248, 1) 80%,
            rgba(251, 7, 217, 1) 90%,
            rgba(255, 0, 0, 1) 100%
        );
    }

    .nav-active .navigation--button {
        color: white;
    }

    span {
        position: relative;
    }    

            .navigation--item:hover span {
                animation: animate .7s infinite;
            } 

            .navigation--item span:nth-child(1) {
                animation-delay: 0s;
            }
            
            .navigation--item span:nth-child(2) {
                animation-delay: .1s;
            }
            .navigation--item span:nth-child(3) {
                animation-delay: .2s;
            }
            .navigation--item span:nth-child(4) {
                animation-delay: .3s;
            }
            .navigation--item span:nth-child(5) {
                animation-delay: .4s;
            }
            .navigation--item span:nth-child(6) {
                animation-delay: .5s;
            }
            .navigation--item span:nth-child(7) {
                animation-delay: .6s;
            }
            .navigation--item span:nth-child(8) {
                animation-delay: .7s;
            }
    
    @keyframes animate {
        0% {
            color: #FF69B4;
            top: 0px;
        }
        14% {
            color: #FE2020;
            top: -1px;
        }
        28% {
            color: #FFA500;
            top: -2px;
        }
        42% {
            color: #FFFF00;
            top: -3px;
        }
        56% {
            color: #008000;
            top: -2px;
        }
        70% {
            color: #40E0D0;
            top: -1px;
        }
        84% {
            color: #4B0082;
            top: 0px;
        }
        100% {
            color: #9400D3;
            top: 1px;
        }
    }

    .menu:hover {
        color: #ff33ff;
        }

    .menu {
        transition: color .2s ease-in-out;
    }

    .logo {
        width: 7.01rem;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 3;
    }

    .hamburgerButton {
        position: fixed;
        top: 0;
        right: 0;
        margin: 3.5rem 1.5rem;
        z-index: 4;
        font-size: 1rem;
    }
</style>