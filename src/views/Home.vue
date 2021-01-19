<template>
  <div class="home container">
    <BlogArticleList />
    
  </div>
</template>

<script>
// @ is an alias to /src
import BlogArticleList from '@/components/Blog/ArticleList.vue'

// exporte notre composant Home.vue
export default {
  name: 'Home',
  components: {
    BlogArticleList,
  }
}
</script>
