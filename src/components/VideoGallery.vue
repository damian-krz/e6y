<template>
    <div class="videoGallery">
        <div class="line-container">
            <svg class="e6y" viewBox="0 0 186 1024" fill="none" preserveAspectRatio="xMidYMax meet">
                <path class="firstLine" d="M93 764.302V711.996M156.938 640.318H29.0625C27.0071 640.318 25.0358 641.134 23.5824 642.587C22.129 644.04 21.3125 646.011 21.3125 648.067V775.926C21.3125 777.981 22.129 779.952 23.5824 781.405C25.0358 782.858 27.0071 783.675 29.0625 783.675H156.938C158.993 783.675 160.964 782.858 162.418 781.405C163.871 779.952 164.688 777.981 164.688 775.926V648.067C164.688 646.011 163.871 644.04 162.418 642.587C160.964 641.134 158.993 640.318 156.938 640.318V640.318ZM58.0475 659.69L93 711.996L58.0475 659.69ZM127.953 659.69L93 711.996L127.953 659.69Z
                M66.8438 207.737V312.349M156.938 188.365H29.0625C27.0071 188.365 25.0358 189.181 23.5824 190.634C22.129 192.087 21.3125 194.058 21.3125 196.114V323.972C21.3125 326.028 22.129 327.999 23.5824 329.452C25.0358 330.905 27.0071 331.721 29.0625 331.721H156.938C158.993 331.721 160.964 330.905 162.418 329.452C163.871 327.999 164.688 326.028 164.688 323.972V196.114C164.688 194.058 163.871 192.087 162.418 190.634C160.964 189.181 158.993 188.365 156.938 188.365V188.365ZM66.8438 312.349H119.156H66.8438ZM66.8438 207.737H119.156H66.8438ZM66.8438 260.043H100.944H66.8438Z
                M91.1012 433.714C72.1525 434.721 57.8925 451.73 57.8925 470.715V503.261C57.9028 512.564 61.6061 521.483 68.1889 528.058C74.7718 534.632 83.6956 538.325 93 538.325V538.325C97.6104 538.325 102.176 537.417 106.435 535.653C110.694 533.889 114.565 531.304 117.825 528.044C121.085 524.784 123.671 520.915 125.435 516.656C127.199 512.397 128.107 507.832 128.107 503.222
                M121.907 445.182C115.514 436.813 107.454 433.559 96.255 433.559H91.1012M128.107 503.222C128.046 493.953 124.32 485.084 117.743 478.551C111.166 472.018 102.271 468.352 93 468.352C83.6889 468.352 74.7592 472.05 68.1753 478.633C61.5913 485.216 57.8925 494.145 57.8925 503.455L128.107 503.222Z
                M156.938 414.341H29.0625C27.0071 414.341 25.0358 415.157 23.5824 416.611C22.129 418.064 21.3125 420.035 21.3125 422.09V549.949C21.3125 552.004 22.129 553.975 23.5824 555.428C25.0358 556.882 27.0071 557.698 29.0625 557.698H156.938C158.993 557.698 160.964 556.882 162.418 555.428C163.871 553.975 164.688 552.004 164.688 549.949V422.09C164.688 420.035 163.871 418.064 162.418 416.611C160.964 415.157 158.993 414.341 156.938 414.341V414.341Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
            </svg>
        </div>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
        <i :class="{ drop : isDrop }"></i>
    </div>
</template>

<script>
export default {
    name: 'VideoGallery',

    data() {
        return {
            isDrop: true,
        }
    },

    mounted() {
        let path = document.querySelector('.firstLine');
        let pathLength = path.getTotalLength();
        let timer = null;

        path.style.strokeDasharray = pathLength + ' ' + pathLength;
        path.style.strokeDashoffset = pathLength * 2;

        window.addEventListener('scroll', () => {
            let scrollPercentage = (document.documentElement.scrollTop * 50 + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight / 2);

            let drawLength = pathLength * scrollPercentage;
            path.style.strokeDashoffset = pathLength - drawLength;
        });

        const getRandomColor = () => { 
            return (Math.floor(Math.random() * (255 - 10)) + 10);
        };

        const getColor = () => {
            return `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
        };
        
        window.addEventListener('scroll', function() {
            path.setAttribute("stroke", getColor());

            if(timer !== null) {
                clearTimeout(timer);        
            };
            
            timer = setTimeout(function() {
                path.setAttribute("stroke", "black");
            }, 10);
        }, false);

        let drop = document.querySelectorAll('.drop');

        const rain = () => {
            drop.forEach(element => {
                let size = Math.random() * 5;
                let posX = Math.floor(Math.random() * window.innerWidth);
                let delay = Math.random() * -20;
                let duration = Math.random() * 10;

                element.style.width = .5 + size + 'px';
                element.style.left = posX + 'px';
                element.style.animationDelay = delay + 's';
                element.style.animationDuration = duration + 's';
            });
        };
        rain();

        window.addEventListener('scroll', function() {
            drop.forEach(element => {
                element.style.background = `linear-gradient(transparent, ${getColor()})`;
            });

            if(timer !== null) {
                clearTimeout(timer);        
            };
            
            timer = setTimeout(function() {
                drop.forEach(element => {
                    element.style.background = "linear-gradient(transparent, #000000)";
                });
            }, 10);
        }, false);

    },

};
</script>

<style scoped lang="scss">
    .videoGallery {
        height: 100vh;
        position: relative;
    }
    .line-container {
        height: 100%;
        text-align: center;
        overflow: hidden;
        position: relative; 
    }

    .e6y {
        position: relative;
        height: 100%;
    }

    .drop {
        position: absolute;
        top: 0;
        bottom: 0;
        height: 20%;
        background: linear-gradient(transparent, black);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        animation: animate 5s linear infinite;
    }

    @keyframes animate {
        0% {
            transform: translateY(-100px);
        }
        100% {
            transform: translateY(110vh);
        }
    }

</style>