<template>
    <div class="blogNavigation">
        <ul class="blogNavigation__ul">
            <router-link class="blogNavigation__link" to="#">Create Post</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'BlogNavigation'

}
</script>

<style scoped lang="scss">
    .blogNavigation {        
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;

        &__link {
            padding: 1rem;
            font-size: 14px;
        }
    }

</style>>
