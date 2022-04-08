<template>
  <HeroClip />
  <Skit />
  <VideoGallery />
  <Gallery />
  <Slider />
  <Game />
</template>

<script>
import HeroClip from '../components/HeroClip.vue';
import Skit from '../components/Skit.vue';
import VideoGallery from '../components/VideoGallery.vue';
import Slider from '../components/Slider.vue';
import Game from '../components/Game.vue';
import Gallery from '../components/Gallery.vue';

export default {
    name: 'Home',

    components: {
        HeroClip,
        Skit,
        VideoGallery,
        Slider,
        Gallery,
        Game,
    }, 
}
</script>

<style lang="scss" scoped>

</style>