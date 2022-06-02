<template>
    <div class="blogPost">
        <div class="blogPost__config" v-if="isLogged">
            <a href="#" class="blogPost__config--header">Edytuj</a>
        </div>
        <div class="blogPost__image">
            <img :src="require(`../assets/gallery/${post.blogPhoto}.jpg`)" :alt="`${post.blogPhoto}`">
        </div>
        <div class="blogPost__content">
            <h2>{{ post.blogTitle }}</h2>
            <p>{{ post.blogPost }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogPost',
    props: ['post'],

    data() {
      return {
        isLogged: true,
        
      };
    },
}
</script>

<style scoped lang="scss">
    .blogPost {
        color: magenta;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;

        &__config {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            font-size: 1rem;
            padding: 1rem;
        }

        &:nth-child(even) {
            background-color: magenta;
            color: black;
            font-weight: bold;
        }

        @media (min-width: 900px) {
            flex-direction: row;
        }

        &__content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 3;

            h2 {
                font-size: 1.5rem;
                padding: 1rem;
            }

            p {
                font-size: 1rem;
                padding: 2rem;
            }
        }

        &__image {
            flex: 1;
            max-height: 25rem;
        }

        &:nth-child(even) {
            .blogPost__content {
                order: 1;
            }

            .blogPost__image {
                order: 2;
            }
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

</style>