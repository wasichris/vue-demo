<template>
    <div>
        <!--
        分頁簽有兩種方式可以做
        1. 每頁都存在實體div，且畫面都做好，切頁簽只是依照該頁面需求ajax資料回來就好
        2. 只有一頁，就是使用router-view切換新頁面載入該 router-view 中
        -->

        <!--套Bootstrap有頁簽效果-->
        <div>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                     <!--需要調整linkActiveClass為active才不會有問題(已透過全域設定)-->
                     <!--在這邊要設定 exact ，不然路徑被包含住就會顯示 active 被選擇狀態-->
                    <router-link class="nav-link" href="#" data-toggle="tab" exact :to="{path: '/demo/tabTester/'}">Basic Control</router-link>
                </li>
                <li class="nav-item">
                    <!--需要調整linkActiveClass為active才不會有問題(已透過全域設定)-->
                    <router-link class="nav-link" href="#" data-toggle="tab" :to="{path: '/demo/tabTester/propsTester'}">Props Tester</router-link>
                </li>
                <li class="nav-item">
                    <!--需要調整linkActiveClass為active才不會有問題(已透過全域設定)-->
                    <!--這邊會的路由會使用到名稱為 BasicControl 與 PropsTester 的 router-view 渲染出口-->
                    <router-link class="nav-link" href="#" data-toggle="tab" :to="{path: '/demo/tabTester/all'}">All</router-link>
                </li>

            </ul>

            <!-- 渲染出口 -->
            <!-- 在界面中擁有多個單獨命名的視圖，沒有設置名字默認為 default -->
            <router-view></router-view>
            <router-view name="BasicControl"></router-view>
            <router-view name="PropsTester"></router-view>
        </div>

    </div>
</template>

<script>

export default {
    /* html tag name, but if it's page that it doesn't mean any thing */
    name: 'about',
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
       
    }
}
</script>

