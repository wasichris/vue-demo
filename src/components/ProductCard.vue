<!--HTML-->
<template>
    <div class="product-card">
        <div class="card">
            <h3 class="card-header">{{clonedMadeFrom}} 
                <label class="modify-link" @click="modifyMadeFrom">modify string prop</label>
            </h3>
            <div class="card-block">
                <h4 class="card-title">{{product.name}}</h4>
                <p class="text-danger">${{product.price}}
                    <label class="modify-link" @click="modifyProductPrice">modify object prop</label>
                </p>
                <p class="card-text">{{product.description}}</p>
                <a href="#" class="btn btn-primary">More Info</a>
            </div>
        </div>
    </div>
</template>

<!--JavaScript-->
<script>
export default {
    name: 'productCard',
    // 外部傳入資料區塊
    props: {
        madeFrom: {
            type: String,
            default: 'default country',
            required: false
        },
        product: {
            type: Object,
            default: function() {
                return {
                    name: 'default name',
                    description: 'default description',
                    price: 300.00
                }
            }
        }
    },
    // 資料區塊
    data() {
        return {
            // 無須通知父組件 madeFrom 異動資訊
            internalMadeFrom: this.madeFrom
        }
    },
    // 屬性區塊
    computed: {
        clonedMadeFrom: {
            get: function() {
                return this.madeFrom;
            },
            set: function(newValue) {
                // 將異動後的數值送給父祖件
                this.$emit('madeFromChanged', newValue);
            }
        }
    },
    // 方法區塊
    methods: {
        modifyMadeFrom: function() {
            // 修改 string 型態的 props 屬性
            this.clonedMadeFrom = 'Japan' + new Date().getSeconds()
        },
        modifyProductPrice: function() {
            // 修改 object 型態的 props 屬性
            this.product.price += 1
        }
    }
}
</script>

<!--CSS/SCSS-->
<style scoped lang="scss">
.product-card {
    width: 300px;
    margin: 0 auto;
}

.modify-link {
    cursor: pointer;
    color: blue;
    font-size: 12px;
}
</style>