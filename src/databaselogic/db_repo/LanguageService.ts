import { appDatasource } from "../db_config/config";
import { Languages } from "../db_entity/language";
import { ILanguageService } from "../db_interface/ILanguageService";

export class LanguageService implements ILanguageService{
    
    async getLanguage(languageId: number) {
        const data:any = await appDatasource.getRepository(Languages).findOne({
            select:[],
            where:{
                languageId : languageId
            }
        })
        return data;  
    }

    async getAllLanguage() {
        const data:any = await appDatasource
        .createQueryBuilder()
        .select()
        .from(Languages,'l')
        .getRawMany()
        return data;
    }

    async getLan(languageName: string) {
        const data:any = await appDatasource.getRepository(Languages).findOne({
            select:[],
            where:{
                languageName : languageName
            }
        })
        return data;
    }

    async postLanguage(languageName: string) {
        const data:any = {
            languageName: languageName,
        }
        const saveData:any = await appDatasource.getRepository(Languages).save(data)
        return saveData;
    }

    async putLanguage(languageId: number, languageName: string) {
        const data:any = await appDatasource.getRepository(Languages).update({
            languageId:languageId
        },{
            languageName:languageName
        })
        return data;
    }
    
    async deleteLanguage(languageId: number) {
        const data:any = await appDatasource.getRepository(Languages).delete({
            languageId:languageId
        })
        return data;
    }
}
