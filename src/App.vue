<!--HTML-->
<template>
    <div id="app">
        <!-- 渲染出口 -->
        <router-view></router-view>
    </div>
</template>

<!--JavaScript-->
<script>
export default {
    name: 'app',
    created() {
        // [註冊監聽事件]
        this.$bus.$on('specialEvent', event => {
            toastr.info(event.msg, event.title)
        });
    },
    beforeDestroy: function() {
        // [銷毀監聽事件]
        // 最好在组件銷毀前，清除 specialEvent 所有監聽 
        // 如果要指定哪個監聽對應方法，就需要傳入第二個參數(對應$on設定的方法)
        this.$bus.$off('specialEvent');
    }
}
</script>
