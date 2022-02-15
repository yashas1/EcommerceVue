<template>
  <div class="container py-3">
    <router-link class="btn btn-light my-3" to="/">Go Back</router-link>

    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-3">
        <img
          class="img-fluid"
          :src="productdetail.imageUrl"
          :alt="productdetail.imageUrl"
        />
      </div>

      <div class="col-md-4">
        <div class="list-group list-group-flush">
          <div class="list-group-item">
            <h4>{{ productdetail.name }}</h4>
          </div>
          <div class="list-group-item">
            <div class="rating">
              <b-form-rating
              disabled
                id="rating"
                inline
                variant="success"
                :value="productdetail.rate"
                no-border
                size="sm"
              ></b-form-rating>
              <span>{{ productdetail.rate }} Rating</span>
            </div>
          </div>
          <div class="list-group-item">
            <strong>Price: ${{ productdetail.price}}</strong>
          </div>
          <div class="list-group-item">
            {{ productdetail.content }}
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card">
          <div class="list-group list-group-flush">
            <div class="list-group-item">
              <div class="row">
                <div class="col">Total price:</div>
                <div class="col">
                  <strong>${{totalprice}}</strong>
                </div>
              </div>
            </div>
            <div class="list-group-item">
              <div class="row">
                <div class="col">Status:</div>
                <div class="col" v-if="productdetail.stockstatus">In Stock</div>
                <h2 v-else>out of stock 😢</h2>
              </div>
            </div>
          <div class="list-group-item">
              <div class="row">
                <div class="col">Qty</div>
                <div class="col">
                  <select @change="switchSelect($event)" class="form-control">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="list-group-item">
              <button
                v-if="true"
                :disabled="!productdetail.stockstatus"
                @click.stop="addCart(productdetail.id)"
                type="button"
                class="btn-block btn btn-primary"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-6 mt-5">
        <h2>Reviews</h2>
        <div class="list-group list-group-flush">
          <div class="list-group-item mt-2 rounded rounded-3 border border-2 border-primary overflow-auto" v-for="review in productdetail.comments" :key="review.id">
            <strong>{{review.user?review.user.email:"Anonymus user"}}</strong>
            <div class="rating">
              <span
                ><i
                  :hidden="!(review.rate>0)"
                  class="fas fa-star"
                  style="color: rgb(248, 232, 37)"
                ></i></span
              ><span
                ><i
                  :hidden="!(review.rate>1)"
                  class="fas fa-star"
                  style="color: rgb(248, 232, 37)"
                ></i></span
              ><span
                ><i
                  :hidden="!(review.rate>2)"
                  class="fas fa-star"
                  style="color: rgb(248, 232, 37)"
                ></i></span
              ><span
                ><i
                  :hidden="!(review.rate>3)"
                  class="fas fa-star"
                  style="color: rgb(248, 232, 37)"
                ></i></span
              ><span
                ><i
                  :hidden="!(review.rate>4)"
                  class="fas fa-star"
                  style="color: rgb(248, 232, 37)"
                ></i></span
              ><span></span>
            </div>
            <p>{{review.message}}</p>
          </div>
        </div>
          <div class="list-group mt-5" v-if="$store.state.activeUser&&$store.state.activeUser.order.filter((productDtl)=>productDtl.product.id===productdetail.id).length>0">
            <h2>Write a Customer Review</h2>
            <form class="" @submit="addComment">
              <div class="form-group">
                <label class="form-label" for="rating">Rating</label
                ><select id="rating" class="form-control" v-model="rate">
                  <option value="">Select...</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent/MaarFaad</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="comment">Comment</label
                ><textarea row="3" v-model="message" id="comment" class="form-control"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/store";
import router from "../router/index"
import CartProduct from "../store/Model/cart"
import Comment from "../store/Model/comment"
export default {
  created(){
    if(this.productdetail.stockstatus)
      this.qty = 1
    else
      this.qty = 0
    
  },
  store,
    data() {
        let productdetails=this.$store.state.products.filter(x => x.id == this.$route.params.idProduct)
      return {
        productdetail: productdetails[0],
        totalprice:this.$store.state.products.filter(x => x.id == this.$route.params.idProduct)[0].price
      }
    },
    methods:{
      addCart(productId){
        var qty=1
          if(this.qty>0)
            qty = this.qty
          if(this.$store.state.activeUser)
          {
            this.$store.state.activeUser.cart.push(
              new CartProduct(this.$store.state.products.filter((product)=>(product.id===productId))[0],qty)
            )
            router.push('/cart')
          }
          else
          {
            router.push("/login")
          }
      },
      switchSelect(e){
      this.totalprice=this.productdetail.price*e.target.value
      console.log(e)
      },
      addComment(e)
      {
        e.preventDefault()
        console.log(this.$store.state);
        const comment = new Comment(1,this.$store.state.activeUser,this.message,this.rate,this.productdetail.id);
        this.$store.commit("addComment",comment)
        this.message = ""
        this.rate = 1
      }
    },
    computed:{
      getComputedPrice()
      {
        return this.productdetail.price * this.qty;
        
      }
    }
  }
</script>
<style scoped>
.b-rating.disabled{

  background-color:white;
  color:#ffa534
}
</style>