<template>
  <div class="heroClip">
      <video controls class="heroClip__video">
        <source src="../assets/insta.mp4" type="video/mp4">
      </video>
  </div>
</template>

<script>
export default {
    name: 'HeroClip',
}
</script>

<style scoped lang="scss">
    .heroClip {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;

        &__video { 
            width: 100vw;
            height: 90vh;
            background-color: black;
        }
    }
</style>