//? File's imports
const userControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    const data = userControllers.findAllUsers();
    res.status(200).json(data);
 };


 const getUserById = (req, res) => {
    const id = req.params.id;
    const data = userControllers.findUserById(id);
    
    if(data){
        //? caso Exitoso
        res.status(200).json(data);
    } else {
        //! error
        res.status(404).json({message: 'Invalid ID'});
    }
 };

 const postNewUser = (req, res) => {

    const {first_name, last_name, email, password, birthday} = req.body;
    
    if(last_name){
       //? caso Exitoso
       const data = userControllers.createNewUser({first_name, last_name, email, password, birthday})
       res.status(201).json(data);
    } else {
        //! error
        res.status(400).json({
            message: "Invalid Data",
            fields: {
               first_name: "String",
               last_name: "String",
               email: "String",
               password: "String",
               birthday: 'YYYY/MM/DD'
            },
        });
    }   
 }


 module.exports = {
    getAllUsers,
    getUserById,
    postNewUser
 }