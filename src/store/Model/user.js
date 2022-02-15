class User{
    
    constructor(email,password,address)
    {
        this.id = 0;
        this.email = email;
        this.password = password;
        this.address = address;
        this.cart = [];
        this.order = [];
    }

    
}
export default User;