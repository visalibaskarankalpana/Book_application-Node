import { appDatasource } from "../databaselogic/db_config/config";
import { Book } from "../databaselogic/db_entity/Book";
import express, { Request, Response } from 'express';

 const app = express();

// app.use(express.json());

//*****************************CREATE BOOK******************* */
export const addBook = async (req: Request, res: Response) => {
    try {
      const userRepo = appDatasource.getRepository(Book);
      const { title, author, description, availability } = req.body;
  
      const book = new Book();
      book.title = title;
      book.author = author;
      book.description = description;
      book.availability = availability;
      const bookDb = await userRepo.save(book);

      
      
      res.status(200).json(bookDb);
      console.log(bookDb);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };

//******************************GET BOOK BY ID  */
export const getBookById = async(req:Request, res:Response)=>{
    try{
      const bookRepo = appDatasource.getRepository(Book);
      const bookId = Number(req.params.id);
      const bookDb = await bookRepo.findOneBy({id:bookId})
      
      if(!bookDb){
        return res.status(404).json("invalid Id");
      }
      else{
    
        res.status(200).json(bookDb)
        console.log("Is working")
      }
    }
    catch(error){
        res.status(500).json({message: 'Internal Server Error'})
    }
}

//*************************GET ALL BOOKS ************* */

export const getBook = async(req:Request, res:Response)=>{
    const bookRepo = appDatasource.getRepository(Book);
    try {
         const bookDb = await bookRepo.find();
         res.status(200).json(bookDb);
         console.log("Is working")
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
}

//****************************UPDATE A BOOK ***************** */

export const updateBook =async (req: Request, res:Response) => {
    try {
        const bookRepo = appDatasource.getRepository(Book);
        const { title, author, description, availability } = req.body;
        const bookId = Number(req.params.id);
        let bookDb = await bookRepo.findOneBy({id:bookId})
        console.log(req.body);

        if(!bookDb){
            return res.status(404).json("invalid ID");
            }
            else{
                bookDb.title = title;
                bookDb.author = author;
                bookDb.description = description;
                bookDb.availability = availability;
                const updatedBook = await bookRepo.save(bookDb);
                res.status(200).json(updatedBook);
                console.log(`Successfully Updated ${bookDb}`)
            }
      } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }
    }


//******************************DELETE BOOK************************ */
export const deleteBook = async(req: Request, res: Response) =>{
    try {
        
        const bookRepo = appDatasource.getRepository(Book);
        const bookId = Number(req.params.id);
            let bookDb = await bookRepo.findOneBy({id:bookId})
        if(!bookDb){
        return res.status(404).json("invalid ID");
        }
        else{
            await bookRepo.remove(bookDb);
            res.status(200).json(`sucessfully Deleted ${req.params.id}`)
        }
    } catch (error) {
        
    }
}