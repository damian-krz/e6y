<template>
    <div class="categoryContainer">
        <ul class="categoryContainer__ul">
            <li class="categoryContainer__ul--li">
                <a class="categoryContainer__ul--a" @click="overallMethod">overall</a>
            </li>
            <li class="categoryContainer__ul--li">
                <a class="categoryContainer__ul--a" @click="computerMethod">computer</a>
            </li>
            <li class="categoryContainer__ul--li">
                <a class="categoryContainer__ul--a" @click="somethingMethod">something</a>
            </li>
        </ul>
    </div>
    <div class="gallery">
        <div class="gallery__container">
            <div v-if="overall" v-for="image in imagesOverall" :key="image.url" class="gallery__content" >
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__content--img">
            </div>
            <div v-if="something" v-for="image in imagesComputer" :key="image.url" class="gallery__content" >
                <img :src="getImgUrl(image.url)" :alt="image.alt" class="gallery__content--img">
            </div>
            <div v-if="computer" v-for="image in imagesSomething" :key="image.url" class="gallery__content" >
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
            imagesOverall: [
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
                ], 
            imagesComputer: [
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
                ],
            imagesSomething: [
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
        overall: true,
        computer: true,
        something: true,
        }
    },
    
    methods: {
        getImgUrl: function (imagePath) {
            return require('@/assets/Nagalerie/' + imagePath);
        },
        overallMethod: function() {
            if(this.overall === true) {
                this.overall = true;
            } else {
                this.overall = !this.overall;
            }
            this.computer = false;
            this.something = false;
        },
        computerMethod: function() {
            this.overall = false;
            if(this.computer === true) {
                this.computer = true;
            } else {
                this.computer = !this.overall;
            }
            this.something = false;
        },
        somethingMethod: function() {
            this.overall = false;
            this.computer = false;
            if(this.something === true) {
                this.something = true;
            } else {
                this.something = !this.overall;
            }
        },
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

    .categoryContainer__ul {
        display: flex;
        justify-content: center; 
        
        &--li {
            list-style: none;
            padding: 0 2rem;
            font-size: 4rem;
        }

        &--a {
            cursor: pointer;
            font-weight: 900; 

            &:hover {
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
                color: white;
            } 
        }
    }
</style>