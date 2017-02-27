<template>

    <div id="app-header">
        <nav class="navbar navbar-toggleable-md navbar-inverse">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <router-link class="navbar-brand" :to="{path: '/home'}">Geker</router-link>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" href="#" :to="{path: '/home'}">
                            <i class="fa fa-home" aria-hidden="true"></i> Home 
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" href="#" :to="{path: '/features'}">
                            <i class="fa fa-diamond" aria-hidden="true"></i> Features
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" href="#" :to="{path: '/demo'}">
                            <i class="fa fa-clone" aria-hidden="true"></i> Demo
                        </router-link>
                    </li>
                  
                </ul>


                <ul class="navbar-nav  justify-content-end">

                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="showShoppingCart">
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="logout">
                            <i class="fa fa-sign-out" aria-hidden="true"></i> log out
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

    </div>


</template>

<script>
export default {
    name: 'appHeader',
    data() {
        return {
            msg: 'I\'m a header'
        }
    },
    methods: {
        showShoppingCart: function() {

        },
        logout: function() {
            localStorage.clear();
            this.$router.push('/login');
        }
    },
    components: {}
}
</script>