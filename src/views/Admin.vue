<template>
  <div class="admin container">
    <h1>Admin</h1>
    <create-article />
  </div>
</template>

<script>
import CreateArticle from '@/components/Blog/CreateArticle.vue'

export default {
  components: {
    CreateArticle,
  }
}
</script>