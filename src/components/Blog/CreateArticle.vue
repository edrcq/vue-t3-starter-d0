<template>
    <div class="row">
        <form @submit.prevent="handleFormSubmit()">
            <div class="mb-3">
                <label for="author_name" class="form-label">Author name</label>
                <input v-model="model.author.name" type="text" class="form-control" id="author_name" placeholder="">
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input v-model="model.article.title" type="text" class="form-control" id="title" placeholder="">
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">Content</label>
                <textarea v-model="model.article.content" class="form-control" id="content" rows="3"></textarea>
            </div>
            <button class="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {

    data() {
        return {
            model: {
                author: {
                    name: ''
                },
                article: {
                    title: '',
                    content: ''
                }
            }
        }
    },
    
    methods: {
        handleFormSubmit() {
            const { author, article } = this.model
            this.sendArticle(author, article)
        },

        sendArticle(author, article) {
            axios.post('http://144.76.13.213:16079/posts', { author, article })
                .then(resp => {
                    alert('OK!')
                })
                .catch(err => {
                    alert(err.message)
                })
        }
    }
}
</script>