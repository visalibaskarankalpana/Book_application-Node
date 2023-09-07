import {Controller,Tags,Route,Get,Put,Delete,Query,Request, Post, Middlewares, Body} from "tsoa";
import { checkMail, verifyMail, verifyUser } from "../Middleware/userMiddleware";
import { ILogic } from "../bussinesslogic/businessLogic/ILogic";
import { CONSTANTS } from "../mapper/constants";
import jwt from 'jsonwebtoken'
import { failureResp, pagination, successResp } from "../model/response";
import  express  from 'express';
import { Logic } from "../bussinesslogic/businessLogic/logic";
import { postUserData, putUserData } from "../model/requests";
import bcrypt from 'bcryptjs';
import { sendMail } from "../mail/verifyEmailRoute";



@Tags("User Controller")
@Route("/api")
export class User_Controller extends Controller{

//************* USER LOGIN API*********************/
  /**
   * For Getting Active user list
   * @summary Login User
   */
    @Post("loginUser")
    @Middlewares(checkMail())
    async getUserLogin (@Query('email')email:string, 
                        @Query('password')password:string, 
                        @Request() req:express.Request){
        let res = req.res;
        try {
            const logic:ILogic = new Logic();
            const detail = await logic.getUserLogin(email)
    //CREATES ACCESS TOKEN AND REFRESH'S TOKEN 
            const payload = {userid:detail.id,name:detail.userName,status:detail.activeStatus,role:detail.role};
            const securityKey:any = CONSTANTS.JWT_SECURITY_KEY;
            const signIn:any={
                expiresIn:'10m'
                }
                const token = jwt.sign(payload,securityKey,signIn);
                req.headers['x-auth-header'] = token;
                const data: any ={
                    token: token,
                    userData: payload,
                }
                const result: any ={
                    _data: data,
                    _msg: " User has Logged in Successfully  "
                }
                return successResp(result,res)
        }   
        catch(e){
            const dataObj: any ={
                _data: [],
                _msg: " Login Failed "
            }
            return failureResp(dataObj,res)
        }
    }


//***************************USER LOGOUT ********************** */
 
 /**
   * For Getting Active user list
   * @summary user Logout
   */
@Post("userLogout")
    @Middlewares(checkMail())
    async userLogout (@Query('email')email:string, 
                     @Query('password')password:string,
                     @Request()req:express.Request)
    {
        let res = req.res;
        try {
            const logic: ILogic = new Logic();
            const responseObj = await logic.userLogout(email)
            const dataObj: any ={
                _data :[],
                _msg : `${email} has been logged out successfully `
            }
            console.log("Logged out Successfully")
            return successResp(dataObj,res)
        } catch (e) {
            const dataObj:any={
                _data:[],
                _msg: `${email} login is failed `
            }
            console.log("Logged out is Unsuccessful")
            return successResp(dataObj,res)
        }

    }     

//*************************GET ALL USER ****************** */
 /**
   * For add user to the existing list
   * @summary get all user
   */
    @Get("getAllUser")
    async getAllUser(@Query('pages')pages:number,
                     @Query('limits')limits:number,
                     @Request()req:express.Request)
        {
            let res = req.res;
            try {
                let logic:ILogic = new Logic()
                const responseObj = await logic.getAllUser(pages,limits)
                const data:any ={
                    result :pagination (pages,limits,responseObj),
                }
                const dataObj:any ={
                    _data: data,
                    _msg:" Users fetched Successfully "
                }
                return successResp(dataObj,res)
            } catch (error) {
                const dataObj:any ={
                    _data:[],
                    _msg: "Login Failed "
                }
                return successResp(dataObj,res)
            }


         }
    //********************FETCH USER WITH USER ID  */
    /**
   * For Getting Active user list
   * @summary User List
   */
    @Get("getUserById")
    @Middlewares(verifyUser())
    async getUserById (@Query()userid:number, 
                       @Request() req: express.Request)
    {
        let res = req.res;
        try{
            let logic:ILogic = new Logic();
            const responseObj = await logic.getUserById(userid)
            const dataObj:any = {
                _data : responseObj,
                _msg : "User Fetched Successfully"
            }
            return successResp(dataObj,res)
        }
        catch (e) {
            const dataObj:any = {
                _data : [],
                _msg : "User Fetched Failed"
            }
        return successResp(dataObj,res)
        }
    }
       
    //********************ADD USER TO DB  */

    /**
   * For Getting Active user list
   * @summary Add User to List
   */
    @Post("addUser")
    @Middlewares(verifyMail())
    async postUser (@Body()userdata: postUserData,
                    @Request() req: express.Request){
        let res = req.res
        const password=userdata.password;
        const hashedPassword = await bcrypt.hash(password, 10);
        userdata.password = hashedPassword;

        try {
            let logic:ILogic = new Logic()
            const responseObj = await logic.postuser(userdata)
            const dataObj:any ={
                _data: responseObj,
                _msg: "User Added Successfully to DB"
            }
            sendMail(req.body.name, req.body.email)
            return successResp(dataObj,res)
        } catch (e) {
            const dataObj:any = {
                _data : [],
                _msg : "Sorry unable to add user Data "
            }
            return successResp(dataObj,res)
        }
                
    }
    //***************************UPDATES specific USER DATA */

    /**
   * For Getting Active user list
   * @summary Update User to List
   */
    @Put("updateUser")
    async putUser (@Body() userData:putUserData,
                    @Request()req:express.Request){
        
        let res = req.res
        const password=userData.password;
        const hashedPassword = await bcrypt.hash(password, 10);
        userData.password = hashedPassword;

        try {
            let logic:ILogic = new Logic()
                const responseObj =await logic.putUser(userData)
                const dataObj : any ={
                    _data: responseObj,
                    _msg: "User Data updated Successfully"
                }
            }
         catch (error) {
            const dataObj : any ={
                _data:[],
                _msg:"User Data failed to update"
            }
            return successResp(dataObj,res)
            
        }
    }

    //**********************DELETES USER DATA */
      /**
   * For Getting Active user list
   * @summary delate User from List
   */
        @Delete("deleteUser")
        async deleteUser (@Query()id:number,
                         @Query()activeStatus:boolean,
                         @Request()req:express.Request){
            let res=req.res
            try {
                let logic:ILogic = new Logic()
                const responseObj = await logic.deleteUser(id,activeStatus)
                const dataObj:any ={
                    _data: responseObj,
                    _msg: " User data has been deleted Successfully"
                }
                sendMail(responseObj.email,responseObj.name)
                return successResp(dataObj,res)
            } catch (error) {
                const dataObj : any ={
                    _data:[],
                    _msg: " User Deactivation has failed "
                }
                return successResp(dataObj,res)
                
            }                
        }
    }
    





