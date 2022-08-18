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
      firebase.auth().onAuthStateChanged((user) => {
        this.$store.commit("updateUser", user);
        if(user) {
          this.$store.dispatch("getCurrentUser");
        }
      }),
      this.checkRoute();
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

  }
</style>
