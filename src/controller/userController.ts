// import express, { Request, Response } from 'express';
// import { appDatasource } from '../databaselogic/db_config/config';
// import { User } from '../databaselogic/db_entity/User';
// import bcrypt from 'bcryptjs';
// import { sendMail } from '../mail/verifyEmailRoute';
// import { postUserData } from './../model/requests';
// import { ILogic } from './../bussinesslogic/businessLogic/ILogic';
// import { Logic } from '../bussinesslogic/businessLogic/logic';
// import { successResp } from '../model/response';


// const app = express();

//  export class userController{c
     

// //**************************CREATE A USER ********************* */
//  async addUser(req:express.Request, res: express.Response){
    
//     const password = req.body.password
//  //********** */ encrypting password before saving it into the database*************** 
//     //10 denotes time taken to encrypt the password *************************
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const userData:postUserData ={
//       firstName: req.body.firstName,
//       userName: req.body.userName,
//       email: req.body.email,
//       password: hashedPassword,
//     }
//     const userRepo:ILogic = new Logic();
//     const userDb = await userRepo.postuser(userData);
//     sendMail(req.body.name, req.body.mail);

//     res.status(200).json({ message: 'User created successfully.' });
//     console.log(userDb);

// }

// //**************************GET ALL USER *************** */

// async AllUsers(req:express.Request, res:express.Response){

//     const limit = req.body.limit;
//     const page = req.body.page;
    
//     const user:ILogic = new Logic();
//     const data:any = await user.getAllUser(limit , page)

//     res.status(400).send(successResp(data,"Success Response"))

// }

// async RemoveUser(req:express.Request , res:express.Response) {

//     const id = req.body.userId;
//     const status = req.body.status;

//     const userLogic:ILogic = new Logic()
//     const data:any = await userLogic.deleteUser(id , status)
    
//     res.status(400).send(successResp( data , "Success Response"))

// }

// }

//   //********************GET USER BY ID *************************** */

//   export const getUserById = async (req:Request,res:Response) => {
//     try{
//         const userRepo = appDatasource.getRepository(User);
//         const userId = Number(req.params.id);
//         let userDb = await userRepo.findOneBy({id:userId})
        
//         if(!userDb){
//             return res.status(404).json("invalid ID");
//             }
//             else{
//             res.status(200).json(userDb)
//             }
//         }
//         catch(error){
//             res.status(500).json({message: 'Internal Server Error'})
//         }
    
//     }

// //********************* UPDATE USER********************** */    
// export const updateUser = async (req:Request,res:Response) => {
//     try{
//         const userRepo = appDatasource.getRepository(User);
//         const { firstName, userName, password, activeStatus } = req.body;
//         const userId = Number(req.params.id);
//         let userDb = await userRepo.findOneBy({id:userId})
//         console.log(req.body);

//         if(!userDb){
//             return res.status(404).json("invalid ID");
//             }
//             else{
//                 userDb.firstName = firstName;
//                 userDb.userName = userName;
//                 userDb.password = password;
//                 userDb.activeStatus = activeStatus;
//                 let updatedUser=await userRepo.save(userDb)
//                 res.status(200).json(updatedUser);
//                 console.log("Updated user with generated JWT token")
//             }
//         }
//         catch(error){
//             res.status(500).json({message: 'Internal Server Error'})
//         } 
// }

// //*********************DELETE USER*********************** **/

