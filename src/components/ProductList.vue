<template>
    <div>
      <div class="container">
  <div class="row mx-md-n5 row-cols-1 row-cols-sm-2 row-cols-md-4">
      <div v-for="productData in $store.state.products" :key="productData.id">
       <div class="col" style="margin-top:30px">
        <Product v-bind:productData="productData"/>
        </div>
        </div>
</div>
      </div>
       </div>
  
</template>
<script>
import Product from "./Product.vue";
import store from "../store/store";
export default {
    name:'productList',
    store,
     data() {
    return {
    };
  },
    components:{
        Product
    }

}
</script>