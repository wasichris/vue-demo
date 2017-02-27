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
                        <router-link :to="{path: '/demo'}" exact>Basic Control</router-link>
                    </li>
                   <li>
                        <router-link :to="{name: 'propsTester'}" exact>Props Tester</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'tabTester'}" exact>Tab Tester</router-link>
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
    name: 'demo',
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