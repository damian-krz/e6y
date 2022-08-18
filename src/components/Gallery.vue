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
                { url: '1 (1).jpg', alt: 'eyyyyyy' },
                { url: '1 (2).jpg', alt: 'eyyyyyy' },
                { url: '1 (3).jpg', alt: 'eyyyyyy' },
                { url: '1 (4).jpg', alt: 'eyyyyyy' },
                { url: '1 (5).jpg', alt: 'eyyyyyy' },
                { url: '1 (6).jpg', alt: 'eyyyyyy' },
                { url: '1 (7).jpg', alt: 'eyyyyyy' },
                { url: '1 (8).jpg', alt: 'eyyyyyy' },
                { url: '1 (9).jpg', alt: 'eyyyyyy' },
                { url: '1 (10).jpg', alt: 'eyyyyyy' },
                { url: '1 (11).jpg', alt: 'eyyyyyy' },
                { url: '1 (12).jpg', alt: 'eyyyyyy' },
                { url: '1 (13).jpg', alt: 'eyyyyyy' },
                { url: '1 (14).jpg', alt: 'eyyyyyy' },
                { url: '1 (15).jpg', alt: 'eyyyyyy' },
                { url: '1 (16).jpg', alt: 'eyyyyyy' },
                { url: '1 (17).jpg', alt: 'eyyyyyy' },
                { url: '1 (18).jpg', alt: 'eyyyyyy' },
                { url: '1 (19).jpg', alt: 'eyyyyyy' },
                { url: '1 (20).jpg', alt: 'eyyyyyy' },
                { url: '1 (21).jpg', alt: 'eyyyyyy' },
                { url: '1 (22).jpg', alt: 'eyyyyyy' },
                { url: '1 (23).jpg', alt: 'eyyyyyy' },
                { url: '1 (24).jpg', alt: 'eyyyyyy' },
                { url: '1 (25).jpg', alt: 'eyyyyyy' },
                { url: '1 (26).jpg', alt: 'eyyyyyy' },
                { url: '1 (27).jpg', alt: 'eyyyyyy' },
                { url: '1 (28).jpg', alt: 'eyyyyyy' },
                { url: '1 (29).jpg', alt: 'eyyyyyy' },
                { url: '1 (30).jpg', alt: 'eyyyyyy' },
                { url: '1 (31).jpg', alt: 'eyyyyyy' },
                { url: '1 (32).jpg', alt: 'eyyyyyy' },
                { url: '1 (33).jpg', alt: 'eyyyyyy' },
                { url: '1 (34).jpg', alt: 'eyyyyyy' },
                { url: '1 (35).jpg', alt: 'eyyyyyy' },
                { url: '1 (36).jpg', alt: 'eyyyyyy' },
                { url: '1 (37).jpg', alt: 'eyyyyyy' },
                { url: '1 (38).jpg', alt: 'eyyyyyy' },
                { url: '1 (39).jpg', alt: 'eyyyyyy' },
                { url: '1 (40).jpg', alt: 'eyyyyyy' },
                { url: '1 (41).jpg', alt: 'eyyyyyy' },
                { url: '1 (42).jpg', alt: 'eyyyyyy' },
                { url: '1 (43).jpg', alt: 'eyyyyyy' },
                { url: '1 (44).jpg', alt: 'eyyyyyy' },
                { url: '1 (45).jpg', alt: 'eyyyyyy' },
                { url: '1 (46).jpg', alt: 'eyyyyyy' },
                { url: '1 (47).jpg', alt: 'eyyyyyy' },
                { url: '1 (48).jpg', alt: 'eyyyyyy' },
                { url: '1 (49).jpg', alt: 'eyyyyyy' },
                { url: '1 (50).jpg', alt: 'eyyyyyy' },
                { url: '1 (51).jpg', alt: 'eyyyyyy' },
                { url: '1 (52).jpg', alt: 'eyyyyyy' },
                { url: '1 (53).jpg', alt: 'eyyyyyy' },
                { url: '1 (54).jpg', alt: 'eyyyyyy' },
                { url: '1 (55).jpg', alt: 'eyyyyyy' },
                { url: '1 (56).jpg', alt: 'eyyyyyy' },
                { url: '1 (57).jpg', alt: 'eyyyyyy' },
                { url: '1 (58).jpg', alt: 'eyyyyyy' },
                { url: '1 (59).jpg', alt: 'eyyyyyy' },
                { url: '1 (60).jpg', alt: 'eyyyyyy' },
                { url: '1 (61).jpg', alt: 'eyyyyyy' },
                { url: '1 (62).jpg', alt: 'eyyyyyy' },
                { url: '1 (63).jpg', alt: 'eyyyyyy' },
                { url: '1 (64).jpg', alt: 'eyyyyyy' },
                { url: '1 (65).jpg', alt: 'eyyyyyy' },
                { url: '1 (66).jpg', alt: 'eyyyyyy' },
                { url: '1 (67).jpg', alt: 'eyyyyyy' },
                { url: '1 (68).jpg', alt: 'eyyyyyy' },
                { url: '1 (69).jpg', alt: 'eyyyyyy' },
                { url: '1 (70).jpg', alt: 'eyyyyyy' },
                { url: '1 (71).jpg', alt: 'eyyyyyy' },
                { url: '1 (72).jpg', alt: 'eyyyyyy' },
                { url: '1 (73).jpg', alt: 'eyyyyyy' },
                { url: '1 (74).jpg', alt: 'eyyyyyy' },
                { url: '1 (75).jpg', alt: 'eyyyyyy' },
                { url: '1 (76).jpg', alt: 'eyyyyyy' },
                { url: '1 (77).jpg', alt: 'eyyyyyy' },
                { url: '1 (78).jpg', alt: 'eyyyyyy' },
            ],
        }
    },
    
    methods: {
        getImgUrl: function (imagePath) {
            return require('@/assets/Nagalerie/' + imagePath);
        }
    }

}
</script>

<style scoped lang="scss">
    .gallery {
        &__container {
            display: grid;
            justify-items: center;
            grid-template-columns: repeat(20, minmax(0, 1fr));
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

            &:nth-child(11n+1) {
                filter: hue-rotate(180deg);
            }

            &:nth-child(11n+2) {
                filter: hue-rotate(240deg);
            }
        }
    }


</style>