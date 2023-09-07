export interface ICategoryService{
    
    getAllCategory():any;
    getCategory(categoryId:number):any;
    getCat(categoryName:string):any;
    postCategory(categoryName:string):any;
    putCategory(categoryId:number,categoryName:string):any;
    deleteCategory(categoryId: number):any;
}