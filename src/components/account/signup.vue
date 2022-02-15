<template>
<section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="../../assets/SignupPage.png" class="img-fluid" alt="Phone image" >
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form @submit="registerUser">
          <!-- Email input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="form1Example13">Email address</label>
            <input v-model="email" type="email" id="form1Example13" class="form-control form-control-lg" placeholder="Email address"/>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="form1Example23">Password</label>
            <input v-model="password" type="password" id="form1Example23" class="form-control form-control-lg" placeholder="Password"/>
          </div>

          <!-- Address input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="form1Example23">Address</label>
            <textarea v-model="address" type="password" rows="4" id="form1Example23" class="form-control form-control-lg" placeholder="Address"/>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">

          </div>

          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

        </form>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import router from '../../router';
  import store from "../../store/store"
  export default{
    name:"Signup",
    store,
    methods:{
      registerUser(e)
      {
        const userDtls = {
          email : this.email,
          password : this.password,
          address : this.address
        }
        this.$store.commit("addUser",userDtls);
        e.preventDefault();
        router.push("/login");
      }
    }
  }

</script>

<style>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
</style>