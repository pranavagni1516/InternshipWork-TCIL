export const signup = async (req,res) =>{
    try {
        const {fullName,username,confirmPassword,gender} = req.body;
        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords dont match"})
        } 
        const user = await User.findOne({username});
    } catch (error) {
        
    }
};
export const login = (req,res) =>{console.log("login user");};
export const logout = (req,res) =>{console.log("logout user");;}