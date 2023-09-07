import { appDatasource } from "../db_config/config";
import { Author } from "../db_entity/author";
import { IAuthorService } from "../db_interface/IAuthorService";


export class AuthorService implements IAuthorService{
    
    
    async getAllAuthor() {
        const data:any = await appDatasource
        .createQueryBuilder()
        .select()
        .from(Author,'a')
        .getRawMany()
        return data;
    }
    async getAuthor(authorId: number) {
        const data:any = await appDatasource.getRepository(Author).findOneBy({
            authorId : authorId
    })
    return data;
    }
    async getAuth(authorName: string) {
        const data:any = await appDatasource.getRepository(Author).findOne({
            select:[],
            where:{
                authorName : authorName
            }
        })
        return data;

    }
    async postAuthor(authorName: string) {
        const data:any = {
            authorName: authorName,
        }
        const saveData:any = await appDatasource.getRepository(Author).save(data)
        return saveData;
    }
    async putAuthor(authorId: number, authorName: string) {
        const data:any = await appDatasource.getRepository(Author).update({
            authorId:authorId
        },{
            authorName:authorName
        })
        return data;
    }
    async deleteAuthor(authorId: number) {
        const data:any = await appDatasource.getRepository(Author).delete({
            authorId:authorId
        })
        return data;
    }
    
}