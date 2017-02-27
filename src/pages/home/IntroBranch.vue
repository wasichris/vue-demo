<template>
    <div>
        <h1>Branch Introduction</h1>
        <h3>Let me introduce <span> {{branchName}}  Branch </span> for you</h3>
    </div>
</template>

<script>
export default {
    name: 'introBranch',
    data() {
        let vm = this;
        return {
            msg: 'Let me introduce',
            branchName: vm.$route.params.branchName
        }
    },
    mounted: function() {
        //let vm = this;
        //vm.branchName = vm.$route.params.branchName;
    },
    watch: {
        '$route' (to, from) {

            // 響應路由參數的變化
            // 當使用路由參數時，例如從 /welcome/foo 導航到 /welcome/bar
            // 原來的組件實例會被覆用。因為兩個路由都渲染同個組件，比起銷毀再創建，復用則顯得更加高效。
            // 不過，這也意味著組件的生命週期鉤子不會再被調用。

            // 想對路由參數的變化作出響應的話，你可以簡單地 watch（監測變化） $route 對象
            let vm = this;
            vm.branchName = to.params.branchName;
        }
    }
}
</script>

<style scoped>
span{
    color: red;
}
</style>