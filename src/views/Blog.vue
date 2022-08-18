<template>
  <div class="blogContainer">
    <BlogNavigation v-if="isLogged" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
  </div>
</template>

<script>
import BlogNavigation from '../components/BlogNavigation.vue';
import BlogPost from '../components/BlogPost.vue';

export default {
    name: 'Blog',

    components: {
      BlogNavigation,
      BlogPost,
    },

    data() {
      return {
        isLogged: true,
        
      };
    },
    
    computed: {
      sampleBlogPost() {
        return this.$store.state.sampleBlogPost;
      },
    },
};
</script>

<style scoped lang="scss">
  .blogContainer {
    margin-top: 8rem;
  }
</style>