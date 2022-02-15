<template>
   <div class="header">

  <b-navbar toggleable="lg"  type="dark" style="background-color: rgb(99, 81, 206)">
    <div class="container">
    <b-navbar-brand style="text-decoration: none;"><b><router-link to="/">Best Deal</router-link></b></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
    <!-- <form @submit="searchItemFun">
      <b-nav-form size="xl">
          <input type="text" class="mr-xl-3 form-control" v-model="searchItem" size="xl" placeholder="Search"/>
          <b-button size="xl" class="my-2 my-xs-0" type="submit">Search</b-button>
        </b-nav-form>
    </form> -->

      <!-- Right aligned nav items -->
   
    <b-navbar-nav class="ml-auto" right>
        <b-nav-item v-if="$store.state.loggedInUsers>0"><router-link to="/cart"><b>Cart</b></router-link></b-nav-item>
        <b-nav-item v-if="$store.state.loggedInUsers>0"><router-link to="/profile"><b>Profile</b></router-link></b-nav-item>
        <b-nav-item v-if="$store.state.loggedInUsers<=0"><b><router-link to="/login">Login</router-link></b></b-nav-item>
        <b-nav-item class="border border-2 rounded-2 ms-1" v-if="$store.state.loggedInUsers<=0"><b><router-link to="/signup">Register</router-link></b></b-nav-item>
        <b-nav-item v-else>{{$store.state.activeUser.email}} <router-link to="/logout"><b class="border border-2 p-2 rounded-2">Logout</b></router-link></b-nav-item>
      </b-navbar-nav>
      
    </b-collapse>
    </div>
  </b-navbar>
</div>
</template>
<script>
  import store from '../store/store';
    export default 
    {
        name:'Header',
        props:{},
        store,
        components:{
        },
        methods:{
          searchItemFun(e){
            console.log(this.searchItem,e);
            // e.preventDefault()
            // const searchString = this.searchItem.toString().toLowerCase()
            // this.$store.state.products.filter((product)=>(product.name.toLowerCase()===searchString))
          
          }
        }
    }
</script>
<style scoped>

   .navbar-dark .navbar-nav .nav-link {
       color: #FFFFFF;
   }
   a{
       text-decoration: none;
       color: white;
   }
</style>