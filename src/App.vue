<template>
  <Navigation v-if="!navigation" />
  <router-view/>
</template>

<script>
import Navigation from './components/Navigation.vue';
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
    components: {
        Navigation,
    },
    data() {
      return {
        navigation: null,
      };
    },
    created(){
      this.checkRoute();
      console.log(firebase.auth().currentUser);
    },
    mounted(){},
    methods: {
      checkRoute() {
        if(this.$route.name === 'Login' || this.$route.name === 'Register' || this.$route.name === 'ForgotPassword') {
            this.navigation = true;
            return;
        };
        this.navigation = false;
      },
    },
    watch: {
      $route() {
        this.checkRoute();
      },
    },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Comfortaa:wght@300;400;500;600;700&family=Bebas+Neue&family=Noto+Sans+JP&display=swap');

  *,
  *::before,
  *::after { 
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  .wrapper {
    margin: 0 auto;
    max-width: 1920px;
  }

  #app {
    font-size: 62.5%;
    font-family: 'Comfortaa', sans-serif;
    scroll-behavior: smooth;
    overflow: hidden;
    background: black;
    // height: 500vh;
  }
</style>
