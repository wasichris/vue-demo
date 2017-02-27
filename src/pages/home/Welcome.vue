<template>
    <div>
        <div class="jumbotron">
            <h1 class="display-3">{{msg}}</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    </div>
</template>


<script>
    export default {
        /* html tag name, but if it's page that it doesn't mean any thing */
        name: 'Welcome',
        data() {
            return {
                msg: 'Welcome to Vue2'
            }
        }
    }
</script>
