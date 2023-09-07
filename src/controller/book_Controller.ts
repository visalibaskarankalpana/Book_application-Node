
import { Controller, Route, Tags, Post, Get, Put, Delete, Query,Body, Request, Res } from "tsoa";
import express from 'express';
import { ILogic } from "../bussinesslogic/businessLogic/ILogic";
import { Logic } from "../bussinesslogic/businessLogic/logic";
import { successResp, failureResp, pagination, responseObj } from "../model/response";
import { postBookData,putBookData} from "../model/requests";

@Tags("Book Controller")
@Route("/api")
export class BookController extends Controller {

    //************* FETCH A BOOK BY ID **********************/
    @Get("getBook")
    async getBook(@Query('bookId') bookId: number, 
                    @Request() req: express.Request) {
        let res = req.res;

        try {
        const logic: ILogic = new Logic();
        const detail = await logic.getBook(bookId);
        return successResp(detail, res);
        } catch (e) {
        return failureResp("Failed to fetch the book.", res);
        }
    }

    //************* FETCH ALL BOOKS **********************/
    @Get("getAllBooks")
    async getAllBooks(@Query('pages')pages:number,
                      @Query('limits')limits:number,
                      @Request() req: express.Request) 
    {
        let res = req.res;

        try {
        const logic: ILogic = new Logic();
        const books = await logic.getAllBooks(pages,limits);
        const data:any ={
            result :pagination (pages,limits,responseObj),
        }
        return successResp(books, res);
        } 
        catch (e) {
        return failureResp("Failed to fetch books.", res);
        }
    }

    //************* INCREASE VIEW COUNT OF A BOOK **********************/
    @Put("mostViewed")
    async mostViewed(@Query('bookId') bookId: number, 
                    @Request() req: express.Request) {
        let res = req.res;

        try {
        const logic: ILogic = new Logic();
        const result = await logic.mostViewed(bookId);
        return successResp(result, res);
        } 
        catch (e) {
        return failureResp("Failed to increase view count.", res);
        }
    }

    //************* FETCH BOOKS BY ID **********************/
    @Get("getBooks")
    async getBooks(@Query() bookId: number, 
                    @Request() req: express.Request) {
        let res = req.res;

        try {
        const logic: ILogic = new Logic();
        const books = await logic.getBook(bookId);
        return successResp(books, res);
        } catch (e) {
        return failureResp("Failed to fetch books by title.", res);
        }
    }

    //************* ADD A NEW BOOK **********************/
    @Post("postBook")
    async postBook(@Body() bookData: postBookData, 
                    @Request() req: express.Request) {
        let res = req.res;
            
        try {
        const logic: ILogic = new Logic();
        const result = await logic.postBook(bookData);
        return successResp(result, res);
        } catch (e) {
        return failureResp("Failed to add a new book.", res);
        }
    }

    //************* UPDATE AN EXISTING BOOK **********************/
    @Put("putBook")
    async putBook(  @Body() bookData: putBookData, 
                    @Request() req: express.Request) {
        let res = req.res;

        try {
        const logic: ILogic = new Logic();
        const result = await logic.putBook(bookData);
        return successResp(result, res);
        } 
        catch (e) {
        return failureResp("Failed to update the book.", res);
        }
    }

    //************* UPDATE BOOK AVAILABILITY **********************/
    @Put("updateBook")
    async updateBook(@Query('bookId') bookId: number,
                    @Query('availability') availability: boolean, 
                    @Request() req: express.Request) {
        let res = req.res;
                    
        try {
        const logic: ILogic = new Logic();
        const result = await logic.updateBook(bookId, availability);
        return successResp(result, res);
        } 
        catch (e) {
        return failureResp("Failed to update book availability.", res);
        }
    }

    //************* DELETE A BOOK BY ID **********************/
    @Delete("deleteBook")
    async deleteBook(@Query('bookId') bookId: number,
                     @Query('availability')availability: boolean,   
                    @Request() req: express.Request) {
        let res = req.res;

        try {
        const logic: ILogic = new Logic();
        const result = await logic.deleteBook(bookId,availability);
        return successResp(result, res);
        } 
        catch (e) {
        return failureResp("Failed to delete the book.", res);
        }
    }
    }


