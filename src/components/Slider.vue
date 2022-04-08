<template>
    <div class="carousel" style="display:none">
        <agile :dots="false" :autoplaySpeed="2500" :autoplay="true" :fade="true" :timing="easeInOut">
            <div class="carouselItem">
                <img class="carouselItem--img" src="../assets/carousel/1.jpg" alt="">
            </div>
            <div class="carouselItem">
                <img class="carouselItem--img" src="../assets/carousel/2.jpg" alt="">
            </div>
            <div class="carouselItem">
                <img class="carouselItem--img" src="../assets/carousel/3.jpg" alt="">
            </div>
            <div class="carouselItem">
                <img class="carouselItem--img" src="../assets/carousel/4.jpg" alt="">
            </div>
            <div class="carouselItem">
                <img class="carouselItem--img" src="../assets/carousel/5.jpg" alt="">
            </div>
            <div class="carouselItem">
                <img class="carouselItem--img" src="../assets/carousel/6.jpg" alt="">
            </div>
        </agile>
    </div>
</template>
<script>
    import { VueAgile } from 'vue-agile'
    import Arrows from './Arrows.vue';

export default {
    name: 'Slider',
    components: {
        agile: VueAgile,
        Arrows
    },
    props: [ 'dots', 'autoplay-speed', 'autoplay', 'fade', 'timing' ],

}
</script>

<style scoped lang="scss">
    .carousel {
        padding: 2rem;
    }

    .carouselItem {
        font-family: 'Noto Sans JP', sans-serif;   
        display: flex;
        justify-content: center;
        align-items: center;

        &--img {
            width: 50vw;
            height: 50vh;
            object-fit: cover;
        }
    }


</style>