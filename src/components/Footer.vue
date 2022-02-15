<template>
  <b-navbar toggleable="lg"  type="dark" style="background-color: rgb(99, 81, 206);position:fixed;bottom:0;left:0;width:100%;height:30px">
    <div class="container">
    <b-navbar-brand href="/"> <div class="copyright text-center text-lg-left font-weight-bold">
          © {{year}} <a href="/" class="font-weight-bold ml-1 text-light" target="_blank">Best Deal</a>
        </div></b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>

   
   <b-navbar-nav class="ml-auto" left>
        <b-nav-item href="/cart" class="text-light"><b>About Us</b></b-nav-item>
        <b-nav-item href="/profile" ><b>License</b></b-nav-item>
        <b-nav-item href="/login" ><b>Follow us on: <i class="fab fa-facebook " aria-hidden="true"></i>
          
			
		

          
          
          </b></b-nav-item>
  </b-navbar-nav>
      
    </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear()
      };
    }
  };
</script>
<style scoped>
  
   .navbar-dark .navbar-nav .nav-link {
       color: #FFFFFF;
   }

   
   a {
      text-decoration: none;
  }
</style>