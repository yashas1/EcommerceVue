import Vuex from 'vuex';
import Vue from 'vue';
import User from './Model/user';
import products from '../assets/products.json'
// import User from '../store/Model/user';
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        loggedInUsers:0,
        products:products,
        users:[
                new User('abc@mail.com','abc'),
                new User('bcd@mail.com','bcd'),
        ],
        carts:[

        ],
        orders:[

        ],
        activeUser:null
    },
    mutations:{
        addUser(state,userDtls){
            var user = new User(userDtls.email,userDtls.password,userDtls.address)
            var maxId = 0;
            state.users.forEach(user => {
                if(user.id>maxId)
                {
                    maxId = user.id
                }
            });
            maxId++;
            user.id = maxId; 
            state.users = [...state.users,user];
        },
        increaseLoggedInUser(){
            this.state.loggedInUsers++;
        },
        logout()
        {
            this.state.loggedInUsers=0;
            this.state.users.splice((user)=>(user.email==this.state.activeUser.email))
            this.state.users = [...this.state.users,this.state.activeUser];
            this.state.activeUser = null;
            console.log(this.state.users);
        },
        removeFromCart(state,payload)
        {
            state.activeUser.cart = state.activeUser.cart.filter((cartDtls)=>(cartDtls.product.id!==payload.productId))
        },
        updateUserDtls(state,userDtls)
        {
            var user = new User(userDtls.email,userDtls.password,userDtls.address)
            user.id = userDtls.id
            user.cart = state.activeUser.cart
            user.order = state.activeUser.order
            state.activeUser = user
        },
        addComment(state,commentDtls)
        {
            var maxId=0;
            const comments = state.products.filter((product)=>(product.id===commentDtls.productId))[0].comments
            comments.forEach(comment => {
                if(maxId<comment.id)
                    maxId=comment.id
            });
            maxId++
            commentDtls.id = maxId

            state.products.filter((product)=>(product.id===commentDtls.productId))[0].comments.push(commentDtls)
            console.log("Function called");
        }
    },
    getters:{
       getTotalAmount(state)
       {
            var totalValue = 0
            state.activeUser.cart.forEach(cartDtls => {
                totalValue += cartDtls.product.price*cartDtls.qty
            });
           
            return totalValue
       },
    },
    actions:{}
});

export default store;