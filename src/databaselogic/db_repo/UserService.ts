import { postUserData, putUserData } from "../../model/requests";
import { appDatasource } from "../db_config/config";
import { User } from "../db_entity/User";
import { IUserService } from "../db_interface/IUserService";

export class UserService implements IUserService {


    constructor() {
        
    }
      
 //***********EMAIL************ */
    async User(mail: string) {
        const Data:any = await appDatasource.getRepository(User).findOneBy({
            email:mail,
        })
        appDatasource.getRepository(User).update({
        email: mail,
        },{
            activeStatus: true
        })
        return Data;
    }

    async getAllUser() {
        const data: any = await appDatasource
        .createQueryBuilder()
        .select()
        .from(User,'u')
        .getRawMany()
        return data;
    }
 
    async GetUser() {
        
        const data:any = await appDatasource.getRepository(User).find()
           return data
    }

    async getUserById(id: number) {
        
        const data:any = await appDatasource.getRepository(User).findOneBy({
           id:id
        })
        return data;
    }

    async postUser(userData: postUserData) {
        await appDatasource.getRepository(User)
        .createQueryBuilder('user')
        .insert()
        .values({
            firstName: userData.firstName,
            userName: userData.userName,
            email: userData.email,
            password: userData.password,
            // activeStatus: userData.activeStatus

        })
        .execute()

    }

    
    async putUser(userData: putUserData) {

        await appDatasource.getRepository(User)
        .createQueryBuilder('user')
        .update()
        .set({
            firstName : userData.firstName,
            userName : userData.userName,
            email : userData.email,
            password : userData.password
        })
        .where('id = :id' , {id:userData.id})
        .execute()
        
    }

    async deleteUser(id: number, activeStatus: boolean) {

        await appDatasource.getRepository(User)
        .createQueryBuilder('user')
        .update()
        .where('id = :id' , {id:id})
        .execute()
        
    }

    async userLogout(email: string) {
        const data:any = await appDatasource.getRepository(User).update({
            email:email
        },{
            activeStatus: false
        });
        return data
    }


}
    