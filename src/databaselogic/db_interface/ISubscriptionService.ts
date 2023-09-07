export interface ISubscriptionService{
    
    getAllSubscriber():any;
    getUser(userId:number):any;
    getSubscriber(subId:number):any;
    getBook(bookId:number):any;
    // adds subscriber
    postSubscriber(userId:number,bookId:number):any;
    //refreshes table
    refresh():any;
    }
