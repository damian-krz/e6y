<template>
    <div class="netArtGalleryContainer">
        <p class="netArtGalleryContainer__content" style="transform: rotateY(45deg)" @mouseover="mouseOver">e</p>
    </div>
</template>

<script>
export default {
    name: 'NetArtGallery',

    data() {
        return {
            imagesOnChange: [
                { url: 'ey1.png', alt: 'eyyyyyy' },
                { url: 'ey2.png', alt: 'eyyyyyy' },
                { url: 'ey3.png', alt: 'eyyyyyy' },
                { url: 'ey4.png', alt: 'eyyyyyy' },
            ],
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
                img.style.width = "100px"; 
                this.$store.dispatch("getNetArtEy");
                let count = this.$store.state.netArtEyCount;

                switch(count) {
                    case 3: {
                        img.setAttribute("src", this.getImgUrl(this.imagesOnChange[0].url));
                        break;
                    }
                    case 2: {
                        img.setAttribute("src", this.getImgUrl(this.imagesOnChange[1].url));
                        break;
                    }
                    case 1: {
                        img.setAttribute("src", this.getImgUrl(this.imagesOnChange[2].url));
                        break;
                    }
                    case 0: {
                        img.setAttribute("src", this.getImgUrl(this.imagesOnChange[3].url));
                        break;
                    }
                }
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
        getImgUrl: function (imagePath) {
            return require('@/assets/' + imagePath);
        },
    }

}
</script>

<style lang="scss" scoped>
    .netArtGalleryContainer {
        margin-top: 8rem;
        background-color: pink;

        &__content {
            word-wrap: break-word;
            font-size: 6rem;
            font-family: 'Press Start 2P';
            color: black;
        }
    }
    
</style>