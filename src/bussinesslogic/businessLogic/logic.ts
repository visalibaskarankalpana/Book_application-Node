import { IUserService } from "../../databaselogic/db_interface/IUserService";
import { UserService } from "../../databaselogic/db_repo/UserService";
import { postBookData, postUserData, putBookData, putUserData } from "../../model/requests";
import { ILogic  } from "./ILogic";
import { pagination } from './../../model/response';
import { IAuthorService } from "../../databaselogic/db_interface/IAuthorService";
import { AuthorService } from "../../databaselogic/db_repo/AuthorService";
import { ICategoryService } from "../../databaselogic/db_interface/ICategoryService";
import { CategoryService } from "../../databaselogic/db_repo/CategoryService";
import { IBookService } from "../../databaselogic/db_interface/IBookService";
import { ISubscriptionService } from "../../databaselogic/db_interface/ISubscriptionService";
import { SubscriptionService } from "../../databaselogic/db_repo/SubscriptionService";
import { ILanguageService } from "../../databaselogic/db_interface/ILanguageService";
import { LanguageService } from "../../databaselogic/db_repo/LanguageService";
import { BookService } from "../../databaselogic/db_repo/BookService";

export class Logic implements ILogic{

//************************C A T E G O R Y */
    async getAllCategory(pages: number, limits: number) {
        let catRepo: ICategoryService= new CategoryService
        const responseObj = await catRepo.getAllCategory()
        const result = pagination(pages,limits,responseObj)

    }

    async getCategory(categoryId: number) {
        let catRepo: ICategoryService= new CategoryService
        const responseObj = await catRepo.getCategory(categoryId)
            return responseObj;  
    }

    async postCategory(categoryName: string) {
        let catRepo: ICategoryService= new CategoryService
        const responseObj = await catRepo.postCategory(categoryName)
            return responseObj;

    }

    async putCategory(categoryId: number, categoryName: string) {
        let catRepo: ICategoryService= new CategoryService
        const responseObj = await catRepo.putCategory(categoryId,categoryName)
        return responseObj; 
    }

    async deleteCategory(categoryId: number) {
        let catRepo: ICategoryService= new CategoryService
        const responseObj = await catRepo.deleteCategory(categoryId)
        return responseObj; 

    }

// *************************B O O K 
    async getBook(bookId: number) {
        const bookRepo:IBookService = new BookService();
        const responseObj = await bookRepo.getBook(bookId)
        return responseObj;   
    }

    async getAllBooks(pages: number, limits: number) {
        const bookRepo:IBookService = new BookService();

    
    }

    async mostViewed(bookId: number) {
        const bookRepo:IBookService = new BookService();
        const responseObj = await bookRepo.mostViewed(bookId)
        return responseObj; 

    }

    async postBook(bookData:postBookData) {
        const bookRepo:IBookService = new BookService();
        const responseObj = await bookRepo.postBook(bookData)
        return responseObj;  

    }

    async putBook(bookData:putBookData) {
        const bookRepo:IBookService = new BookService();
        const responseObj = await bookRepo.putBook(bookData)
        return responseObj;

    }

    async updateBook(bookId: number, availability: boolean) {
        const bookRepo:IBookService = new BookService();
        const responseObj = await bookRepo.updateBook(bookId,availability)
        return responseObj; 
    }

    async deleteBook(bookId: number,availability:boolean) {
        const bookRepo:IBookService = new BookService();
        const responseObj = await bookRepo.deleteBook(bookId,availability)
        return responseObj; 
    }

//*******************S U B S C R I B E R  */
    async getAllSubscribers() {
        let subRepo: ISubscriptionService = new SubscriptionService()
        const responseObj = await subRepo.getAllSubscriber()
        return responseObj;
    }

    async getSubscriber(subId: number) {
        let subRepo: ISubscriptionService = new SubscriptionService()
        const responseObj = await subRepo.getSubscriber(subId)
        return responseObj;
    }

    async postSubscriber(userId: number, bookId: number) {
        let subRepo: ISubscriptionService = new SubscriptionService()
        const responseObj = await subRepo.postSubscriber(userId,bookId)
        return responseObj;
    }

    async refresh() {
        let subRepo: ISubscriptionService = new SubscriptionService()
        const responseObj = await subRepo.refresh()
        return responseObj;

    }
//***********************L A N G U A G E */ 
    async getLanguage(languageId: number) {
        let lanRepo : ILanguageService= new  LanguageService()
        const responseObj = await lanRepo.getLanguage(languageId)
            return responseObj;  
    }

    async getAllLanguage() {
        let lanRepo : ILanguageService= new  LanguageService()
        const responseObj = await lanRepo.getAllLanguage()
        return responseObj;

    }

    async postLanguage(langugaeName: string) {
        let lanRepo : ILanguageService= new  LanguageService()
        const responseObj = await lanRepo.postLanguage(langugaeName)
            return responseObj; 

    }

    async putLanguage(languageId: number, languageName: string) {
        let lanRepo : ILanguageService= new  LanguageService()
        const responseObj = await lanRepo.putLanguage(languageId,languageName)
        return responseObj;

    }

    async deleteLanguage(languageId: number) {
        let lanRepo : ILanguageService= new  LanguageService()
        const responseObj = await lanRepo.deleteLanguage(languageId)
        return responseObj;  
    }

    //**********************************U S E R  */
    //user mail for validation
    async getUserLogin(email: string) {
        let userRepo: IUserService = new UserService();
        const responseObj = await userRepo.User(email)
        return responseObj;
    }
   //**************FETCH USER BY ID  */
    async getUserById(id: number) {
        const userRepo: IUserService = new UserService();
        const responseObj = await userRepo.getUserById(id)
        return responseObj;
    }
   //****************FETCH ALL USER  */
    async getAllUser(pages:number,limits:number){
        const userRepo: IUserService = new UserService();
        const responseObj = await userRepo.GetUser()
        const result = pagination(pages,limits,responseObj)
        return responseObj;
    }
   //***************ADD USER  */
    async postuser(userData: postUserData) {
        const userRepo:IUserService = new UserService()
        const data:any = await userRepo.postUser(userData)
        return data;
   }

    //************ UPDATE USER */
    async putUser(userData:putUserData){
        const userRepo : IUserService = new UserService();
        const responseObj = await userRepo.putUser(userData)
        return responseObj;
    }
    //**************DELETE USER */
    async deleteUser(id: number, activeStatus: boolean) {
        const userRepo:IUserService = new UserService()
        const data:any = await userRepo.deleteUser(id,activeStatus)
        return data;
    }
    //***************LOGOUT USER */
    async userLogout(email: string) {
        const userRepo: IUserService = new UserService();
        const responseObj = await userRepo.userLogout(email)
        return responseObj
    }

//*******************************************A U T H O R */

    async getAllAuthor(limit: number, page: number){
        const authorRepo : IAuthorService = new AuthorService ()
        const responseObj = await authorRepo.getAllAuthor()
        const result = pagination(page,limit,responseObj)
    }

    async postAuthor(authorName : string){
        const authorRepo:IAuthorService = new AuthorService();
        const responseObj = await authorRepo.postAuthor(authorName)
        return responseObj;  
    }

    async getAuthor(authorId:number){
        const authorRepo:IAuthorService = new AuthorService();
        const responseObj = await authorRepo.getAuthor(authorId)
        return responseObj;
    }

    async putAuthor(authorId:number,authorName:string){
        const authorRepo:IAuthorService = new AuthorService();
        const responseObj = await authorRepo.putAuthor(authorId,authorName)
        return responseObj;  
    }

    async deleteAuthor(authorId:number){
        const authorRepo:IAuthorService = new AuthorService();
        const responseObj = await authorRepo.deleteAuthor(authorId)
        return responseObj;
    }












}