<template>
  <div class="container">
    <div class="row" style=
    "margin-top:40px">
         <div class="col-md-3"></div>
      <div class="col-md-6">
        <h2>User Profile</h2>
        <form @submit="updateDetails">
       
  <div class="form-row">

    <div class="form-group col-md-12">
    <label for="inputName">Email</label>
    <input type="email" v-model="email" class="form-control" disabled id="inputName" :placeholder="$store.state.activeUser.email">
    </div>
    <div class="form-group col-md-12">
      <label for="inputEmail4">Password</label>
      <input type="text" v-model="password" class="form-control" id="inputEmail4" :placeholder="$store.state.activeUser.password">
    </div>

  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <textarea rows="4" v-model="address" type="text" class="form-control" id="inputAddress" :placeholder="$store.state.activeUser.address"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Update</button>
</form>
      </div>
    </div>
  </div>
</template>
<script>
import store from '../../store/store'

export default {
  name:"Profile",
  store,
  components:{
   
  },
  methods:{
    updateDetails(e)
    {
      e.preventDefault()
      const userDtls = {
          email : (this.email) ? this.email : this.$store.state.activeUser.email,
          password : (this.password) ? this.password : this.$store.state.activeUser.password,
          address : (this.address) ? this.address : this.$store.state.activeUser.address,
          id : this.$store.state.activeUser.id,
          
        }
        this.$store.commit("updateUserDtls",userDtls);
        alert("Profile details are updated successfully")
      }
    }
  }

</script>

