<template>
    <div id="home">
        <div class="home container-fluid">

            <!--Header-->
            <app-header></app-header>

            <!--Content with side bar-->
            <app-side-bar-content>
                <img src="../assets/logo.png" width="50px" height="50px">
                <ul>
                    <li>
                        <!--依據 路徑 來進行路由匹配-->
                        <router-link :to="{path: '/home'}" exact>Welcome</router-link>
                    </li>
                    <li>
                        <!--依據 名稱 直接跳轉到特定路由-->
                        <router-link :to="{name: 'hello'}" exact>Hello</router-link>
                    </li>
                    <li>
                        <!--傳遞參數至動態路由 - URL-->
                        <router-link :to="{path: '/home/introBranch/Taipei'}">Intro Taipei</router-link>
                    </li>
                    <li>
                        <!--傳遞參數至動態路由 - Params-->
                        <router-link :to="{name: 'introBranch', params: { branchName: 'New York' }}">Intro New York</router-link>
                    </li>

                </ul>
            </app-side-bar-content>




            <!--Footer-->
            <app-footer></app-footer>


        </div>
    </div>

</template>


<script>
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import AppSideBarContent from '../components/AppSideBarContent'


export default {
    name: 'home',
    data() {
        return {

        }
    },
    methods: {

    },
    components: {
        AppHeader,
        AppSideBarContent,
        AppFooter
    }

}
</script>