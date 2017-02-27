<template>

    <div class="container-fluid">

        <!--header conponent-->
        <my-header></my-header>

        <div class="row">

            <!--main content-->
            <div class="col-md-12">

                <div class="jumbotron">
                    <h1 class="display-3">Our Features</h1>

                </div>

            </div>


        </div>

        <!--footer conponent-->
        <my-footer></my-footer>

    </div>

</template>

<script>
import MyHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

export default {
    name: 'features',
    components: {
        MyHeader,
        AppFooter
    },
    data() {
        return {
             msg: 'Welcome to features page'
        }
    }

}
</script>
