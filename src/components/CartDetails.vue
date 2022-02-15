<template>
<div class="container">
  <div class="row" style="margin-top:40px " >
    <div class="col-md-8">
      <h1>Shopping Cart</h1>
      <div class="list-group list-group-flush" v-for="cartDtls in $store.state.activeUser.cart" :key="cartDtls.product.id">
        <div class="list-group-item">
          <div class="row" style="border-bottom: solid; border-color: gray; ">
            <div class="col-md-2" style="pading:20px;margin:20px">
              <img
                :src="cartDtls.product.imageUrl"
                :alt="cartDtls.product.name"
                class="img-fluid rounded"
              />
            </div>
            <div class="col-md-3">
              <p>{{cartDtls.product.name}}</p>
            </div>
            <div class="col-md-2">{{cartDtls.product.price}}</div>
            <div class="col-md-2"><input type="number" class="form-control p-2 rounded-2  " v-model="cartDtls.qty"></div>
            <div class="col-md-2">
              <button type="button" @click="removeFromCart(cartDtls.product.id)" class="btn btn-light">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
 
      </div>
    </div>
    <div class="col-md-4" >
      <div class="card">
        <div class="list-group list-group-flush">
          <div class="list-group-item">
            <h2>Subtotal ({{$store.state.activeUser.cart.length}}) items</h2>
            ${{$store.getters.getTotalAmount}}
          </div>
          <div class="list-group-item">
            <button @click="completeOrder" type="button" class="btn-block btn btn-primary">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import router from '../router/index.js';

import store from '../store/store.js';

export default
{
  name:"CartDetails",
  store,
  components:{},
  created(){
    if(!this.$store.state.activeUser)
    {
      router.push('/login')
    }
  }
  ,
  methods:{
    removeFromCart(productId)
    {
      this.$store.commit('removeFromCart',{productId})
    },
    completeOrder()
    {
      if(this.$store.state.activeUser.cart.length)
      {
          router.push('/')
          this.$store.state.activeUser.order.push(...this.$store.state.activeUser.cart)
          this.$store.state.activeUser.cart = []
          alert("Your order is completed")
          console.log(this.$store.state.activeUser.order);
      }
    }
  }
  ,
  computed:{
     
  }
}
</script>
