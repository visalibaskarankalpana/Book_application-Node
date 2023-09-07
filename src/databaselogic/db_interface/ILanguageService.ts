export interface ILanguageService{
    
    getLanguage(languageid:number):any;
    getAllLanguage():any;
    //For validation purpose
    getLan(languageName:string):any;
    postLanguage(languageName:string):any;
    putLanguage(languageId:number,languageName:string):any;
    deleteLanguage(languageId: number):any;
}