import { postBookData, postUserData, putBookData, putUserData } from './../../model/requests';

export interface ILogic{

  //************L O G I N  */
  getUserLogin(email:string):any;
  userLogout(email:string):any;

  //*************U S E R  */
  getAllUser(page:number,limit:number):any;
  getUserById(id:number):any
  postuser(userData:postUserData):any;
  putUser(userData: putUserData):any 
  deleteUser(id:number ,activeStatus:boolean):any;  

  //**************A U T H O R  */
  getAllAuthor(pages:number,limits:number):any;
  getAuthor(authorid:number):any;
  postAuthor(authorname:string):any;
  putAuthor(authorid:number,authorname:string):any;
  deleteAuthor(authorid: number):any;

  //***************C A T E G O R Y */
  getAllCategory(pages:number,limits:number):any;
  getCategory(categoryId:number):any;
  postCategory(categoryName:string):any;
  putCategory(categoryId:number,categoryName:string):any;
  deleteCategory(categoryId: number):any;

  //**************** B O O K*/
  getBook(bookId:number):any;
  getAllBooks(pages:number,limits:number):any;
  mostViewed(bookId:number):any;
  postBook(bookData:postBookData):any;
  putBook(bookData:putBookData):any;
  updateBook(bookId:number,availability:boolean):any;
  deleteBook(authorId: number,availability:boolean):any;

  //******************S U B S C R I P T I O N  */
  getAllSubscribers():any;
  getSubscriber(subId:number):any;
  postSubscriber(userId:number,bookId:number):any;
  refresh():any;

  //******************L A N G U A G E  */
  getLanguage(languageId:number):any;
  getAllLanguage():any;
  postLanguage(langugaeName:string):any;
  putLanguage(languageId:number,lname:string):any;
  deleteLanguage(languageId: number):any;
}
