import { postBookData, putBookData } from "../../model/requests";

export interface IBookService{
    
    //book by id
    getBook(bookId:number):any;
    //Fetches all books
    getAllBooks():any;
    //To increase the view count
    mostViewed(bookId:number):any;
    //For validation purpose
    getBooks(title:string):any;
    //adds book
    postBook(bookData :postBookData):any;
    //update excisting book
    putBook(bookData :putBookData):any;
    //excisitng book status 
    updateBook(bookId:number,availability:boolean):any;
    //deletes book
    deleteBook(bookId: number,availability:boolean):any;
}