<template>
    <div class="card card-body">
        <h4>{{ title }}</h4>
        <p>{{ content }}</p>
        <router-link :to="`/read/${id}`">Read</router-link>
    </div>
</template>

<script>
export default {
    props: {
        id: Number,
        title: String,
        content: String
    },
}
</script>