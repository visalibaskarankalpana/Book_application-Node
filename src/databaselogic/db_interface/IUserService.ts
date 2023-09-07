import { postUserData, putUserData } from "../../model/requests";

export interface IUserService{

    //To check the mail
    GetUser(): unknown;    
    User(mail: string): any;
    getAllUser(): any;
    getUserById(id: number): any;
    postUser(userData :postUserData):any;
    putUser(userData: putUserData):any;
    deleteUser(id: number, activeStatus: boolean): any;
    userLogout(email: string): unknown;
        
}