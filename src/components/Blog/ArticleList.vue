<template>
    <div class="articles-list row">
        <div class="col">
        <article-list-item 
            v-for="(item, index) in list"
            :key="`${index}_art`"
            :title="item.article.title"
            :content="item.article.content"
            :id="item.id"
        />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ArticleListItem from './ArticleListItem.vue'
import { mapState } from 'vuex'

export default {
    components: {
        ArticleListItem,
    },
    // data() {
    //     return {
    //         list: [],
    //     }
    // },
    computed: {
        ...mapState(['list'])
    },

    beforeCreate() {
        this.$store.dispatch('actionTest', 'coucou')
        this.$store.dispatch('blog_getAll')// call VuexInstance.actions.blog_getAll()
    }
}
</script>