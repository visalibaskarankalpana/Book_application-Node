import { appDatasource } from "../db_config/config";
import { User } from "../db_entity/User";
import { ISubscriptionService } from "../db_interface/ISubscriptionService";
import { IUserService } from "../db_interface/IUserService";
import { subscriptionHistory } from './../db_entity/subscriptionHistory';
import { UserService } from "./UserService";

export class SubscriptionService implements ISubscriptionService{
    
    
    async getAllSubscriber() {
        const data:any = await appDatasource
        .createQueryBuilder()
        .select()
        .from(subscriptionHistory,'s')
        .getRawMany()
        return data;   
    }

    async getUser(userId: number) {
        const data:any = await appDatasource.getRepository(subscriptionHistory).findOne({
            select:[],
            where:{
                userId : userId
            }
        })
        return data;     
    }

    async getSubscriber(subId: number) {
        const data:any = await appDatasource.getRepository(subscriptionHistory).findOne({
            select:[],
            where:{
                id : subId
            }
        })
        return data;     
    }

    async getBook(bookId: number) {
        const data:any = await appDatasource.getRepository(subscriptionHistory).findOne({
            select:[],
            where:{
                bookId : bookId
            }
        })
        return data;     
    }

    async postSubscriber(userId: number, bookId: number) {
        const date = new Date();
        const year= date.getFullYear();
        const month=date.getMonth();
        const day = date.getDate();
        const hours=date.getHours();
        const minutes=date.getMinutes();
        const seconds=date.getSeconds()
        const milliseconds= date.getMilliseconds();

        const start= new Date(year +"-"+(month+1)+"-"+day+" "+hours+":"+minutes+":"+seconds+":"+milliseconds);
        const end= new Date(year +"-"+(month+1)+"-"+(day)+" "+hours+":"+(minutes+5)+":"+seconds+":"+milliseconds);
        //const price = books.price;

        const data:any = await appDatasource.getRepository(subscriptionHistory)
        .createQueryBuilder()
        .select()
        .insert()
        .into(subscriptionHistory)
        .values({
            userId:userId,
            bookId:bookId,
            subscribedDate:start,
            validTill:end,
            //price : books.price
        })
        .execute()

        const userRepo:IUserService=new UserService();
        const user:any = await userRepo.getUserById(userId)
        user.bookspurchased.push(bookId)
        appDatasource.manager.save(user)
        return data;     
    }

    async refresh() {

        const detail=await subscriptionHistory
        .createQueryBuilder('sub')
        .select(['userid','bookid','enddate','substatus'])
        .execute() 
 
     for(let i=0;i<detail.length;i++)
     {
         const startdate = new Date();
         //console.log(detail[i].enddate)
         if(startdate>detail[i].enddate)
         {
             await subscriptionHistory
             .createQueryBuilder('sub')
             .update()
             .set({subStatus:false})
             .where("userid=:userid",{userid:i+1})
             .execute()
 
             const user =appDatasource.getRepository(User)
             const result=await user.findOneBy({id:detail[i].userid})
             result?.bookspurchased.shift();
             await appDatasource.manager.save(result)
         } 
 
     }
    }

    
}