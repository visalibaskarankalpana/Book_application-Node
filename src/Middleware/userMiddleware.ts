import * as express from 'express';
import { IUserService } from '../databaselogic/db_interface/IUserService';
import { UserService } from '../databaselogic/db_repo/UserService';
import bcrypt from 'bcrypt'


//checks for USER is ADMIN or NOT 
    export function checkAdmin() {
        return async (req:express.Request , res:express.Response, next:express.NextFunction)=>{

        }
    }

    export function checkMail(){
        return async(req:express.Request , res:express.Response, next:express.NextFunction)=>{
            const email: any = req.query.email;
            const password: any = req.query.password;
            const userRepo:IUserService = new UserService()
            const data = await userRepo.User(email)
        
        if(!data){
            res.status(404).json({
                status: 'failed',
                Message: `User with ${email} has not found `
            })
        }
        else {
        //DECRYPT password to compare the password
        const hashedPassword = await bcrypt.compare(password,data.password)
            if(hashedPassword){
                next();
            }
            else {
                res.status(401).json({
                    status : 'failed',
                    Message: "Invalid Credential entered check your Mail_ID & Password "
                    })
                }
            }
        }
        }

        export function verifyUser() {
            return async (req:express.Request , res:express.Response,next:express.NextFunction)=>{

                const id:any = req.query.id;
                const userRepo:IUserService =new UserService()
                const data = await userRepo.getUserById(id)

                if (data) {
                    next()
                } else {
                    res.status(401).json({
                        status:'failed',
                        message: `Invalid User ${id} `
                    })
                }
            }     
        }

        export function verifyMail(){
            return async (req:express.Request , res:express.Response,next:express.NextFunction)=>{
                const email = req.body.email;
                const password = req.body.password;
                const userRepo:IUserService = new UserService()
                const data = await userRepo.User(email)
                const verifyEmail= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
                const emailval=verifyEmail.test(email)
                const pswrdVal=/^\d[a-z0-9._%+-]$/;
                const verifyPassword=pswrdVal.test(password)
        
                if(emailval &&pswrdVal && !data)
                {
                    next();
                }
                else if(data)
                {
                    res.status(400).json({
                        status : 'Failure',
                        Message : `User Already Added`
                    })
                }
                else{
                    if(!emailval)
                    {
                        res.status(400).json({
                            status : 'Failure',
                            Message : `Invalid ${email} Mail Id...Please Give a Valid Mail`
                        })
                    }
                    else{
                        res.status(400).json({
                            status : 'Failure',
                            Message : `Invalid ${password} Phone number...Please Give a Valid Phone Number`
                        })
                    }
                }   
        }
    }
