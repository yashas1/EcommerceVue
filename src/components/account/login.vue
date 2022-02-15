<template>
<section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="../../assets/loginPage.jpg" class="img-fluid" alt="Phone image" >
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form @submit="submitUserDtls">
          <!-- Email input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="form1Example13">Email address</label>
            <input v-model="email" type="email" id="form1Example13" class="form-control form-control-lg" placeholder="Email address"/>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="form1Example23">Password</label>
            <input v-model="pwd" type="password" id="form1Example23" class="form-control form-control-lg" placeholder="Password"/>
          </div>

          <div class="d-flex">
            <!-- Checkbox -->
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form1Example3"
                checked
              />
              <label class="form-check-label" for="form1Example3" style="padding-right: 50px; padding-bottom: 18px;"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>

          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

          <br>
          <div class="d-flex mb-4" style="padding-top: 18px">
            Not have an account? &nbsp; <a style="color: blue;"> Create New </a>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <a class="btn btn-primary btn-lg btn-block" style="background-color: #3b5998" href="#!" role="button">
            <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
          </a>
          <a class="btn btn-primary btn-lg btn-block" style="background-color: #55acee" href="#!" role="button">
            <i class="fab fa-twitter me-2"></i>Continue with Twitter</a>

        </form>
      </div>
    </div>
  </div>
</section>
</template>

<script>
  import store from "../../store/store";
  import router from "../../router/index";
  export default{
    store,
    data(){
      return{}
    },
    methods:{

      submitUserDtls:function(e){
        e.preventDefault();
        
        const email = this.email
        const password = this.pwd
        const users = this.$store.state.users.filter((user)=>((user.email==email)&&(user.password==password)));

        if(users.length>0)
        {
          this.$store.commit('increaseLoggedInUser');
          console.log('Total users ',this.$store.state.loggedInUsers);
          this.$store.state.activeUser = users[0];
          router.push("/");
        }
      }
    }
    ,
    computed:{
      getData(email)
      {
        return this.$store.getters.getUserDtls(this.$store.state,email)
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