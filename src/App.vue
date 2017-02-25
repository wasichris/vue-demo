<!--HTML-->
<template>
    <div id="app">
        <img src="./assets/logo.png">
        <!-- 渲染出口 -->
        <router-view></router-view>
    </div>
</template>

<!--JavaScript-->
<script>
export default {
    name: 'app'
}
</script>

<!--CSS/SCSS-->
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>