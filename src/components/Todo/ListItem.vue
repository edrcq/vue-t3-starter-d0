<template>
    <li>
        <span :class="{ textbarre: todo.done }">{{ todo.text }}</span>
        <input type="checkbox" v-model="todo.done" />
        <button v-on:click="$emit('deltodo', index)">Delete</button>
    </li>
</template>

<script>
export default {
    props: {
        todo: { type: Object, default: () => ({ text: 'Nothing to do!', done: true })},
        index: Number,
    }
}
</script>

<style scoped>
.textbarre {
    text-decoration: line-through;
}
</style>