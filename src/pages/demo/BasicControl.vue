<!--HTML-->
<template>
    <div class="basic-control">
        <h2> Basic Vue Control</h2>
        <div class="info-box card">

            <h4>{{this.status}}</h4>

            <p> age :
                <input type="number" v-bind:value="age"> (v-bind)</p>
            <!--v-bind:value 可使用簡寫 :value 表示-->

            <p> age :
                <input type="number" v-model="age"> (v-model)</p>

            <button type="button" v-on:click="showStatus"> Show Status Toastr</button>
            <!--v-on:click 可以使用簡寫 @click 表示-->

        </div>
    </div>
</template>

<!--JavaScript-->
<script>
export default {
    name: 'basicControl',
    // 資料區塊
    data() {
        return {
            birthYear: 1983
        }
    },
    // 屬性區塊
    computed: {
        // read only
        status: function() {
            return '我出生於' + this.birthYear + '年'
        },
        // read and write
        age: {
            get: function() {
                return new Date().getFullYear() - this.birthYear
            },
            set: function(v) {
                this.birthYear = new Date().getFullYear() - v
            }
        }
    },
    // 監聽區塊
    watch: {
        birthYear: function(newValue, oldValue) {
            toastr.warning(`birth year has changed from ${oldValue} to ${newValue}`, 'User Status')
        }
    },
    // 方法區塊
    methods: {
        showStatus: function() {
            toastr.success(this.status, 'User Status')
        }
    }
}
</script>

<!--CSS/SCSS-->
<style scoped lang="scss">

.info-box {
    width: 400px;
    padding: 10px;
    text-align: left;
}
</style>