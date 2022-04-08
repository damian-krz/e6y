<template>
  <div class="skit">
      <div class="star star1"></div>
      <div class="star star2"></div>
      <div class="star star3"></div>
      <div class="star star4"></div>
      <div class="star star5"></div>
      <div class="star star6"></div>
      <div class="star star7"></div>
      <div class="star star8"></div>
        <p class="skit__eyTop">
            <span class="skit__eyTop--e">eeeeee</span>
            <span class="skit__eyTop--y">yyyyyy</span>
            <span class="skit__eyTop--y-2">yyyyyy</span>
        </p>
        <div class="skit__eyBottom">
            <p class="skit__eyBottom--move">move</p>
            <p class="skit__eyBottom--ment">ment</p>
        </div>
  </div>
</template>

<script>
    export default {
        name: 'Skit',

        mounted() {
            let skit = document.querySelector('.skit');
            let skitTop = document.querySelector('.skit__eyTop');
            let skitTopE = document.querySelector('.skit__eyTop--e');
            let skitTopY = document.querySelector('.skit__eyTop--y');
            let skitTopY2 = document.querySelector('.skit__eyTop--y-2');
            let skitMove = document.querySelector('.skit__eyBottom--move');
            let skitMent = document.querySelector('.skit__eyBottom--ment');
    
            window.addEventListener('scroll', function() {
                let scrolled = window.pageYOffset;
                let rate = scrolled * .25; 

                skitTop.style.transform = `translateY(${rate}px)`;
                skitMove.style.transform = `translateX(${-rate}px)`;
                skitMent.style.transform = `translateX(${rate}px)`;

                if(skit.getBoundingClientRect().top < 50) {
                    skitTopE.style.color = '#553592';
                    skitTopE.style.textShadow = '2px 4px 2px #fbbeff';
                    skitTopE.style.transform = 'scale(1.5) skewX(-40deg)';
                    skitTopY.style.color = '#fbbeff';
                    skitTopY.style.textShadow = '2px 4px 2px #ff33ff';
                    skitTopY2.style.color = '#553592';
                    skitTopY2.style.textShadow = '2px 4px 2px #fbbeff';
                    skitTopY2.style.transform = 'scale(1.5) skewX(-40deg)';
                    skitMove.style.color = '#fbbeff';
                    skitMove.style.textShadow = '2px 4px 2px #ff33ff';
                    skitMove.style.transform = 'scale(1.25)';
                    skitMent.style.color = '#fbbeff';
                    skitMent.style.transform = 'scale(1.25)';
                    skitMent.style.textShadow = '2px 4px 2px #ff33ff';
                } 
                else {
                    skitTopE.style.color = '#fbbeff';
                    skitTopE.style.textShadow = '2px 4px 2px #ff33ff';
                    skitTopE.style.transform = 'scale(1) skewX(-40deg)';
                    skitTopY.style.color = '#ff33ff';
                    skitTopY.style.textShadow = '2px 4px 2px #fbbeff';
                    skitTopY2.style.color = '#fbbeff';
                    skitTopY2.style.textShadow = '2px 4px 2px #ff33ff';
                    skitTopY2.style.transform = 'scale(1) skewX(-40deg)';
                    skitMove.style.color = '#ff33ff';
                    skitMove.style.textShadow = '2px 4px 2px #fbbeff';
                    skitMent.style.color = '#ff33ff';
                    skitMent.style.textShadow = '2px 4px 2px #fbbeff';
                }
            });
        }
    }
</script>

<style scoped lang="scss">
    .skit {
        position: relative;
        font-family: 'Bebas Neue', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        &__eyTop {
            display: flex;
            flex-direction: column;
            text-align: center;
            letter-spacing: 2rem;
            z-index: 2;

            &--e {
                color: #fbbeff;
                transform: skewX(-40deg);
                font-size: 2rem;
                text-shadow: 2px 4px 2px #ff33ff;  
                transition: all .1s ease-in-out;
            }

            &--y {
                color: #ff33ff;
                transform: skewX(25deg);
                font-size: 3rem;
                text-shadow: 2px 4px 2px #fbbeff;  
                transition: all .1s ease-in-out;
            }

            &--y-2 {
                color: #fbbeff;
                transform: skewX(-40deg);
                font-size: 4rem;
                text-shadow: 2px 4px 2px #ff33ff;  
                transition: all .1s ease-in-out;
            }
        }

        &__eyBottom {
            color: #ff33ff;
            font-size: 4rem;
            letter-spacing: 2.5rem;
            transform: skewX(25deg);
            font-family: 'Press Start 2P';
            text-shadow: 2px 4px 2px #fbbeff;  

            &--move {
                transition: all .05s ease-in-out;
            }

            &--ment {
                transition: all .05s ease-in-out;
            }
        }

        .star {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            animation: animate 8s ease-in-out infinite;
        }

        .star1 {
            animation-delay: 0s;
            background: url('../assets/stars/star1.png');
        }
        .star2 {
            animation-delay: -1s;
            background: url('../assets/stars/star2.png');
        }
        .star3 {
            animation-delay: -2s;
            background: url('../assets/stars/star3.png');
        }
        .star4 {
            animation-delay: -3s;
            background: url('../assets/stars/star4.png');
        }
        .star5 {
            animation-delay: -4s;
            background: url('../assets/stars/star5.png');
        }
        .star6 {
            animation-delay: -5s;
            background: url('../assets/stars/star6.png');
        }
        .star7 {
            animation-delay: -6s;
            background: url('../assets/stars/star7.png');
        }
        .star8 {
            animation-delay: -7s;
            background: url('../assets/stars/star8.png');
        }
    }

    @keyframes animate {
        0%, 20%, 40%, 60%, 80%, 100% {
            opacity: 0;
        }

        10%, 30%, 50%, 70%, 90%, 100% {
            opacity: 1;
        }
    }

</style>