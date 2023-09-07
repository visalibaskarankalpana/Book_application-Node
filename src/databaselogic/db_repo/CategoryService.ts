import { appDatasource } from "../db_config/config";
import { Category } from "../db_entity/category";
import { ICategoryService } from "../db_interface/ICategoryService";

export class CategoryService implements ICategoryService{
  
  
    async getAllCategory() {
        const data:any = await appDatasource
        .createQueryBuilder()
        .select()
        .from(Category,'c')
        .getRawMany()
        return data;
    }

    async getCategory(categoryId: number) {
        const data:any = await appDatasource.getRepository(Category).findOneBy({

            categoryId : categoryId   
    })
    return data;
    }

    async getCat(categoryName: string) {
        const data:any = await appDatasource.getRepository(Category).findOne({
            select:[],
            where:{
                categoryName : categoryName
            }
        })
        return data;
    }

    async postCategory(categoryName: string) {
        const data:any = {
            categoryName: categoryName,
        }
        const saveData:any = await appDatasource.getRepository(Category).save(data)
        return saveData;
    }

    async putCategory(categoryId: number, categoryName: string) {
        const data:any = await appDatasource.getRepository(Category).update({
            categoryId:categoryId
        },{
            categoryName:categoryName
        })
        return data;
    }

    async deleteCategory(categoryId: number) {
        const data:any = await appDatasource.getRepository(Category).delete({
            categoryId:categoryId
        })
        return data;
    }
}
