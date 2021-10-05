import User from "../models/UserModel.js"
const login = async (userData) => {
    const {email, password} = userData;
    console.log(userData)
    if(email){
        const userData = await User.findOne({
            email: email, 
            password: password
        });
        const user = {
            email: userData.email,
            role: userData.role,
            shop: userData.shop,

        }
        return user;
    }
    else{
        return {
            error: "No existe el correo"
        }
    }
    
}

const register = async (userData) => {
    const {email, password, role, shop} = userData;
    console.log(userData)
    return { status: "registered" }
}

const userController = {
    register,
    login
}
export default userController;