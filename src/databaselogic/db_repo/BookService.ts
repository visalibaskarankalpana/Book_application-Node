import { postBookData, putBookData } from "../../model/requests";
import { appDatasource } from "../db_config/config";
import { Book } from "../db_entity/Book";
import { IBookService } from "../db_interface/IBookService";

export class BookService implements IBookService{


    async getBook(bookId: number) {
        const data:any = await appDatasource.getRepository(Book).findOne({
            select:[],
            where:{
                id : bookId
            }      
        })
        return data;
    }
    async getAllBooks() {
        const data=await appDatasource
        .createQueryBuilder()
        .select()
        .from(Book,'b')
        .getRawMany()
        return data; 
    }
    async mostViewed(bookId: number) {
        await appDatasource.getRepository(Book)
        .createQueryBuilder()
        .update(Book)
        .set({viewedCount:() => 'view+1'})
        .where ("bookid=:bookid",{bookid:bookId})
        .execute()
    }
    async getBooks(title: string) {
        const data:any = await appDatasource.getRepository(Book).findOne({
            select:[],
            where:{
                title : title
            }
        })
        return data;
    }
    async postBook(bookData: postBookData) {
        const data:any = {
            title: bookData.title,
            author : bookData.author,
            description: bookData.description,
            category : bookData.category,
            language : bookData.language
        }
        const saveData:any = await appDatasource.getRepository(Book).save(data)
        return saveData;
    
    }
    async putBook(bookData: putBookData) {
        const data:any = await appDatasource.getRepository(Book).update({
            id:bookData.bookId
        },{
            title:bookData.title,
            author:bookData.author,
            description:bookData.description,
            category:bookData.category
        })
        return data;
    
    }
    async updateBook(bookId: number, availability: boolean) {
        const data:any = await appDatasource.getRepository(Book).update({
            id:bookId
        },{
            availability:true
        })
        return data;  
    }
    async deleteBook(bookId: number,availability:boolean) {
        const data:any = await appDatasource.getRepository(Book).delete({
            id:bookId,
            availability:false 
        })
        return data;
    }
    
}