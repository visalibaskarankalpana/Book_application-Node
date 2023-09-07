export interface IAuthorService{

    // Fetch all author 
    getAllAuthor():any;
    // Fetch author by ID
    getAuthor(authorId:number):any;
    //For Validation purpose 
    getAuth(authorName:string):any;
    //Adds author to database
    postAuthor(authorName:string):any;
    //updates exsiting Author detail
    putAuthor(authorId:number,authorName:string):any;
    //Deletes Author
    deleteAuthor(authorId:number):any;
    
}