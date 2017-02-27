<template>
    <div id="app-footer">
        <footer>
            <small>{{msg}}</small>
        </footer>
    </div>
</template>

<script>
export default {
    /* html tag name */
    name: 'my-footer',
    data() {
        return {
            msg: '© Copyright 2017, Geker Corporation'
        }
    }
}
</script>
