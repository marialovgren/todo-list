/**
 * Vue.js Basics
 *
 */

// Create Vue app
const app = Vue.createApp({
    data() {
        return {
            newTodoTitle: "",

            todos: [
                
            ],
        }
    },
    methods: {
        createNewTodo() {
            this.todos.push({ 
                title: this.newTodoTitle, 
                completed: false 
            })
        },

        toggleTodo(todo) { 
            todo.completed = !todo.completed 
        },
    },
    computed: {

    }
})

// Mount Vue app on the element with id `app` in the DOM
app.mount('#app')