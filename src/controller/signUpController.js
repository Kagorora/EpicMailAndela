import user from '../model/users';

class signupControl{
    static saveUser(req, res){
        const { mail,
            firstName,
            lastName,
            password
        } = req.body;
        const newUser = {
            mail,
         firstName, 
         lastName, 
         password
        };
        user.push(newUser);
        return res.status(200).json({
            status: 200,
            data: newUser,
        });
    }
    static displayUser(req, res){

        return res.status(200).json({
            status: 200,
            data: user,
        });  
    }

    static deleteUser(req, res){
        const email = req.params.email;
        console.log(email);
        const person = user.find(u => u.email === email);
        if(person){
            user.pop(email);   

            return res.status(200).json({
                status: 200,
                data: ['user have been successfully deleted'],
            });  
        }
        return res.status(404).json({
            status: 404,
            data: ['failed to delete'],
        });  

    }
}
export default signupControl;