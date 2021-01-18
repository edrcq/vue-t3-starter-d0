<template>
    <div>
    <h1>{{ title }}</h1>

    <input @keyup.enter="addItem" type="text" v-model="newTodo" :style="maxLenInputStyle" /><br />
    <button v-on:click="addItem">Ajouter à la liste</button>

    <ul>
        <!-- v-for=(el, index) in array -->
        <ListItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" v-on:deltodo="deleteTodo"/>
    </ul>
    </div>
</template>

<script>
import ListItem from '@/components/Todo/ListItem.vue'

export default {
    components: {
        ListItem,
    },

    data() { return {
        newTodo: '',
        title: 'Todo List',
        todos: [
            { text: 'Todo 1', done: false },
            { text: 'Todo 2', done: false },
        ]
    }},

    computed: {
        maxLenInputStyle() {
            return this.newTodo.length > 8 ? 'color: red;' : 'color: green;'
        }
    },

    methods: {
        addItem() {
            this.todos.push({
                text: this.newTodo,
                done: false
            })
            this.newTodo = ''
        },

        deleteTodo(index) {
            this.todos.splice(index, 1)
        }
    },
}
</script>