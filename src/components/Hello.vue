<template>
    <div class="hello">

        <h1>{{ msg }}</h1>

        <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
        <button type="button" class="btn btn-primary" @click="showToastr">Show Toastr</button>

        <!-- Secondary, outline button -->
        <button type="button" class="btn btn-warning" @click="hideToastr">Hide Toastr</button>

    </div>
</template>


<script>

export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Vue 2 App'
        }
    },
    methods: {
        showToastr: function() {
            // Display a warning toast, with no title
            toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')

            // Display a success toast, with a title
            toastr.success('Have fun storming the castle!', 'Miracle Max Says')

            // Display an error toast, with a title
            toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')

            // Override global options
            toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', {
                timeOut: 5000
            })
        },
        hideToastr: function() {
            // Remove current toasts using animation
            toastr.clear() 

            // Immediately remove current toasts without using animation
            // toastr.remove()
        }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>