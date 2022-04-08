<template>
    <div class="gallery">
        <div class="gallery__container">
            <div v-for="image in images" :key="image.url" class="gallery__content" >
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__content--img">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Gallery',
    data() {
        return {
            images: [
                { url: '1.jpg', alt: 'eyyyyyy' },
                { url: '2.jpg', alt: 'eyyyyyy' },
                { url: '3.jpg', alt: 'eyyyyyy' },
                { url: '4.jpg', alt: 'eyyyyyy' },
                { url: '1.jpg', alt: 'eyyyyyy' },
                { url: '2.jpg', alt: 'eyyyyyy' },
                { url: '3.jpg', alt: 'eyyyyyy' },
                { url: '5.jpg', alt: 'eyyyyyy' },
                { url: '8.jpg', alt: 'eyyyyyy' },
                { url: '2.jpg', alt: 'eyyyyyy' },
            ],
        }
    },
    
    methods: {
        getImgUrl: function (imagePath) {
            return require('@/assets/gallery/' + imagePath);
        }
    }

}
</script>

<style scoped lang="scss">
    .gallery {
        &__container {
            display: grid;
            justify-items: center;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
        
        &__content {        
            &--img {
                max-height: 250px;        
                object-fit: cover;
                transition: transform .15s ease-in-out;

                &:hover {
                    transform: scale(1.01);
                }

            }
        }
    }


</style>