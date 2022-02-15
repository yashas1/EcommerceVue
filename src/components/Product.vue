<template>
<div class="card my-3 p-3 rounded" style="width: 14rem; box-shadow: 6px 6px 6px #888888">
  <img :src= productData.imageUrl class="card-img-top" height="160px" alt="...">
  <div class="card-body">
    <div class="card-title" style="margin-bottom:0px"><p style="margin-bottom:0px; font-size:13px"><b>{{productData.name}}</b></p></div>
    <b-form-rating id="rating-sm-no-border" :value="productData.rate" style="padding-left: 0px" disabled no-border size="sm"></b-form-rating>
    <p class="card-text" style="font-size:13px">Cost: <b>${{productData.price}}</b></p>
    <router-link :to="'/ProductDetails/' + productData.id"><button type="button" class="btn btn-primary">View</button></router-link>

    
    
  </div>
</div>
</template>
<script>

export default {
  name: "Product",
  props: ["productData"] 
  ,
  data() {
      return {
        value: null
      }
  }
};
</script>
<style scoped>

.b-rating.disabled{

  background-color:white;
  color:#ffa534
}
    .productCard{
        border: 2px gray solid;
    }
</style>
