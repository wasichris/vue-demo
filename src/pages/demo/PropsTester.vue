<!--HTML-->
<template>
    <div class="props-tester">

        <div class="container">
            <form>
                <div class="form-group row">
                    <label class="col-sm-4 form-control-label">Made From</label>
                    <div class="col-sm-8">
                        <input type="text" v-model="madeFrom" class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-4 form-control-label">Product Name</label>
                    <div class="col-sm-8">
                        <input type="text" v-model="product.name" class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-4 form-control-label">Product Price</label>
                    <div class="col-sm-8">
                        <input type="text" v-model="product.price" class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-4 form-control-label">Product Desc</label>
                    <div class="col-sm-8">
                        <input type="text" v-model="product.description" class="form-control">
                    </div>
                </div>

            </form>
        </div>


        <!--使用 ProductCard 子組件 -->
        <product-card v-bind:made-from="madeFrom" :product="product" 
            v-on:madeFromChanged="onMadeFromChanged"></product-card>



    </div>
</template>

<!--JavaScript-->
<script>
import ProductCard from '../../components/ProductCard'

export default {
    name: 'propsTester',
    // 資料區塊
    data() {
        return {
            madeFrom: 'Taiwan',
            product: {
                name: 'Big Pen',
                description: 'What a nice pen!! Buy it now.',
                price: 99.12
            }
        }
    },
    methods: {
        onMadeFromChanged: function(updatedMadeFrom) {
            // 更新 madeFrom 為子組件修改的新數值
            this.madeFrom = updatedMadeFrom
        }
    },
    components: {
        ProductCard
    }

}
</script>

<!--CSS/SCSS-->
<style scoped lang="scss">
.props-tester {
    width: 500px;
    margin: 0 auto;
}
</style>