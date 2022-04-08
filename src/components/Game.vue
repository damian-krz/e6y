<template>
  <div class="game" v-on:click="animate">
      <div class="character"></div>
      <div class="block"></div>
  </div>
</template>

<script>
export default {
    name: 'Game',

    mounted() {
        },

    methods: {
        animate: function() {
            let block = document.querySelector('.block');
            let character = document.querySelector('.character');
            if(character.classList != 'animate') {
                character.classList.add('animate');
            }
            setTimeout(function() {
                character.classList.remove('animate');  
            }, 500);

            let checkDead = setInterval(function () {
                let characterTop = 
                parseInt(window.getComputedStyle(character).
                getPropertyValue("top"));
                let blockLeft = 
                parseInt(window.getComputedStyle(block).
                getPropertyValue("left"));

                if(blockLeft<20 && blockLeft > 0 && characterTop >= 130) {
                    block.style.animation = "none";
                    block.style.display = "none";
                    alert("loose");
                }
            }, 10);

        }
    }

}
</script>

<style scoped lang="scss">
    .game {
        width: 100vw;
        height: 200px;
        border: 1px solid red;
    }

    .character {
        width: 20px;
        height: 50px;
        background-color: red;
        position: relative;
        top: 150px;
    }

    .animate {
        animation: jump 500ms;
    }

    @keyframes jump {
         0%{top: 150px}
         30%{top: 100px}
         70%{top: 100px}
         100%{top: 150px}
    }

    .block {
        width: 20px;
        height: 20px;
        background-color: blue;
        position: relative;
        top: 130px;
        // right: -40px; 
        animation: block 1s infinite linear;
    }

    @keyframes block {
        0%{left: 100vw}
        100%{left: -40px}
    }
</style>