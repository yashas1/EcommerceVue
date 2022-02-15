<template>
  <div>
   <Header/>
 
      <router-view />
  <div class="clear"></div>

    <Footer/>
  </div>
</template>


<script>

import Footer from "../components/Footer.vue"
import Header from '../components/Header.vue';

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
};
</script>
<style scoped>
.clear { clear: both; height: 60px; }
</style>