// import { appDatasource } from '../databaselogic/db_config/config';
// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
// import { User } from '../databaselogic/db_entity/User';
import { sendMail } from '../mail/verifyEmailRoute';

// //secret key for JWT auth
// const SECRET_KEY = '123456-qwert-2yuiop-098765'; 

// //check if the incoming requests, if valid JWT token in the Authorization header and authenticate the user accordingly
// export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
//         const token = req.header('Authorization')?.split(' ')[1];

//         if (!token) {
//             return res.status(401).json({ message: 'Authentication failed: Missing token' });
//         }

//         jwt.verify(token, SECRET_KEY, (err: any, user: any) => {
//             if (err) {
//             return res.status(403).json({ message: 'Authentication failed: Invalid token' });
//             }
//             let { userName }=req.body
//             userName=user;
//             next();
//         });
//     };
    
// //***********//endpoint to handle user login and issue JWT token */ 


//     export const generateToken = async (req: Request, res: Response) => {
//         try {
//           const userRepo = appDatasource.getRepository(User);
//           const { userName, password } = req.body;
      
//           // Check if the user exists and password matches
//           const user = await userRepo.findOneBy({ userName });
//           if (!user || user.password !== password) {
//             return res.status(401).json({ message: 'Authentication failed: Invalid credentials' });
//           }
      
//           // Generates and send the JWT token
//           const token = jwt.sign({ userName: user.userName, role: user.role }, SECRET_KEY, {
//             expiresIn: '1h', // Set the token expiration time as needed
//           });
      
//           res.json({ token });
//           console.log(`Successfully Generated JWT token ${token}`)
//         } catch (error) {
//           res.status(500).json({ message: 'Internal server error' });
//         }
//       }
// //************************endpoint for sending test mail************************************************** */


      export const demo = async(req:Express.Request , res:Express.Response) => {
        sendMail("ALERT","bkvisali@gmail.com")
      }