<template>
    <div class="netArtGalleryContainer" >
        <img class="test" :src="src" alt="">
        <p class="netArtGalleryContainer__content" style="transform: rotateY(45deg)" @mouseover="mouseOver">e</p>
    </div>
</template>

<script>
export default {
    name: 'NetArtGallery',

    data() {
        return {
            src: 'C:/Users/48726/Desktop/KursWWW/NetArtVue/artnet/src/assets/ey1.png'
        }
    },

    mounted() {
        let netArtGalleryContainerContent = document.querySelector('.netArtGalleryContainer__content');
        let netArtGalleryContainer = document.querySelector('.netArtGalleryContainer');

        netArtGalleryContainer.addEventListener('mousemove', () => {
            let letter = document.createElement('a');
            letter.innerHTML = 'y';
            letter.setAttribute('href', 'https://www.youtube.com/shorts/ET19JYJe7e8');
            letter.setAttribute('target', '_blank');
            letter.style.color = getColor();
            letter.style.transform = getRotate();
            netArtGalleryContainerContent.style.transform = getRotate();
            netArtGalleryContainer.style.backgroundColor = getColor();
            
            if(netArtGalleryContainerContent.childNodes.length < 104) {
                netArtGalleryContainerContent.appendChild(letter);
            } else if(netArtGalleryContainerContent.childNodes.length == 104) {
                window.scrollTo(0,document.body.scrollHeight);
                let img = document.createElement('img');
                img.setAttribute('src', '../assets/gallery/1.jpg');
                netArtGalleryContainer.appendChild(img);
            }
        });

        const getRandomColor = () => { 
            return (Math.floor(Math.random() * (255 - 10)) + 10);
        };

        const getColor = () => {
            return `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
        };

        const getRandomRotate = () => {
            return (Math.floor(Math.random() * (255 - 10)) + 10);
        };

        const getRotate = () => {
            let rotate = `rotateY(${getRandomRotate()}deg)`;
            return rotate;
        };
    },

    methods: {

    }

}
</script>

<style lang="scss" scoped>
    .netArtGalleryContainer {
        background-color: pink;

        &__content {
            word-wrap: break-word;
            font-size: 6rem;
            font-family: 'Press Start 2P';
            color: black;
        }
    }
</style>