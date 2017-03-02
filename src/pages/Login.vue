<template>
    <div class="container">
        <div class="row align-items-center justify-content-md-center">

            <div class="col-xs-12 col-md-5 ">
                <div class="card">
                    <div class="card-header">
                        <h4>Login</h4>
                    </div>
                    <div class="card-block">
                        <form class="form" @submit.prevent>
                            <div class="form-group">
                                <label for="loginEmployeeId">Employee Id</label>
                                <input v-model="loginUser.employeeId" type="text" class="form-control" id="loginEmployeeId" placeholder="Enter employee id">
                            </div>
                            <div class="form-group">
                                <label for="loginPassword">Password</label>
                                <input v-model="loginUser.password" type="password" class="form-control" id="loginPassword" placeholder="Password">
                            </div>
                            <input type="submit" class="btn btn-primary float-md-right" @click="login" value="login">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import authService from 'services/authService'
import constantService from 'services/constantService'

export default {
    /* html tag name, but if it's page that it doesn't mean any thing */
    name: 'login',
    data() {
        return {
            loginUser: {}
        }
    },
    methods: {
        login: function() {

            let vm = this;
            authService.login(vm.loginUser)
                .done(data => {

                    // 1. save token in local storage
                    localStorage.setItem(constantService.localStorage.tokenKey, data.token);

                    // 2. direct to home or last visited page
                    // 要判斷是否存在redirect好讓重新登入後的用戶直接跳轉到該頁
                    // http://localhost:8080/login?redirect=%2Fwelcome%2Ffoo
                    var direct = this.$route.query.redirect;
                    if (direct) {
                        // to last unauthrized visiting page 
                        this.$router.push({
                            path: direct
                        });
                    } else {
                        // to home page 
                        this.$router.push({
                            path: '/home'
                        });
                    }

                });
        }
    }
}
</script>


<style scoped>
.row {
    min-height: 500px;
}
</style>