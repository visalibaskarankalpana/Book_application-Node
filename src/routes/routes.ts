import { Router } from "express";
import * as express from 'express';
import jwt from 'jsonwebtoken';
import { IUserService } from "../databaselogic/db_interface/IUserService";
import { UserService } from "../databaselogic/db_repo/UserService";
import { CONSTANTS } from './../mapper/constants';
import { failureResp,rejectObj,successResp } from "../model/response";



export class routes{
    router = Router();
    
 
    //****************************ENDPOINT FOR TEST MAIL - USER TRIES TO LOGIN ****************************************** */
    // checkMail = async(req:express.Request , res:express.Response , next:express.NextFunction) => {
      
    //       const testMail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
      
    //       const email:string = req.body.email;
      
    //       const response = testMail.test(email)
      
    //       const userRepo:IUserService = new UserService()
    //       const data:any = await userRepo.getUserById(email)
      
    //       if(!data){
    //           if(response){
    //               next()
    //           }
    //           else{
    //               res.status(400).send(rejectObj("Give Valid Mail"))
    //           }
             
    //       }
    //       else{
    //           res.status(406).send(rejectObj("User Already Created....."))
    //       }
    //   }
      
      //************************************AUTHORIZATION FOR USER  */
      
      authPage = (permissions:string[]) =>{

        return async(req:express.Request , res:express.Response , next:express.NextFunction) => {

            const header = req.headers.authorization;
            const cookie = await req.cookies.RefreshToken

            try{
                if(header){
                    const token = header.split(" ")[1];
                    const result:any = await this.verify(token);
                    const userRole = await result.role;
                
                        if(permissions.includes(userRole)){
                            next()
                        }
    
                        else{

                            if(cookie){
                                const token:any = await this.verifyRefreshToken(cookie)
                                const result:any = await this.verify(token)
                                const userRole = await result.role
            
                                if(permissions.includes(userRole)){
                                    next()
                                }
            
                                else{
                                    res.status(401).send(rejectObj("OPPS....! \n You dont have PERMISSION  "))
                                }
                            }
                            else{
                                res.status(406).send(rejectObj("Something went wrong.....!"))
                            }
                            
                        }
    
                }
                else{
                    res.status(406).send(rejectObj( "Header is wrong....."))
                }
            }
            catch(err){
                res.status(406).send(rejectObj("Please LogIn...."))
            }

        }

    }
    verify = async(token:string) => {

        const jwtKey:any = CONSTANTS.JWT_SECURITY_KEY

        try{
            const result = jwt.verify(token,jwtKey)
            return result;

        }
        catch(err){
            return "Header Not Found....."
        }
    }

    verifyRefreshToken = async(cookie:any) => {

        try{
          if(cookie){
              const refreshSecurityKey:any = CONSTANTS.REFRESH_SECURITY_KEY
              const result:any = jwt.verify(cookie, refreshSecurityKey )
  
              const security:any = CONSTANTS.REFRESH_SECURITY_KEY
              const payload = {id:result.id , name:result.name , email:result.email , role:result.role}
  
              const token = jwt.sign(payload , security , {expiresIn : '5m'})
  
          
              return token
          }
          else{
              return "Cookie Not Found....."
          }
        }
        catch(err){
          return " PLEASE TRY TO LOGIN AGAIN "
        }
          
      }
      

//     constructor(){

//    //**********************U S E R ****************************************************************************************** */     
//         this.router.post('/addUser',this.checkMail,userController.prototype.addUser)
//         //this.router.get('/getAllUser',this.authPage(["admin"]),userController.prototype.AllUsers)
//         this.router.get('/getAllUser',userController.prototype.AllUsers)
//         this.router.put('deleteUser', userController.prototype.RemoveUser)


//     }
}