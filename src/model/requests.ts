export interface postUserData{
    firstName:string,
    userName: string,
    email: string,
    password: string,
    // activeStatus: boolean
}

export interface putUserData{
    id : number , 
    firstName : string , 
    userName : string , 
    email : string , 
    password : string 
}

export interface postBookData {
    title : string,
    author : string ,
    description : string ,
    category : number , 
    language : number , 
}

export interface putBookData{
    bookId: number,
    description: string 
    id : number,
    title:string,
    author : string ,
    category : number , 
    language : number ,
    availability : boolean
    
}