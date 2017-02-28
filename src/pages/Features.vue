<template>

    <div class="container-fluid">

        <!--header conponent-->
        <app-header></app-header>

        <div class="row">

            <!--main content-->
            <div class="col-md-12">

                <div class="jumbotron">
                    <h1 class="display-3">Our Features</h1>

                </div>

            </div>


        </div>

        <!--footer conponent-->
        <app-footer></app-footer>

    </div>

</template>

<script>
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

export default {
    name: 'features',
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
             msg: 'Welcome to features page'
        }
    }

}
</script>
