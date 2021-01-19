<template>
  <div class="read">
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

export default {
  data() {
    return {
      article: {
        title: '',
        content: '',
      },
    }
  },

  beforeCreate() {
    const { id } = this.$route.params
    axios.get(`http://144.76.13.213:16079/posts/${id}`).then(response => {
      this.article = response.data.article
    })
  }
}
</script>