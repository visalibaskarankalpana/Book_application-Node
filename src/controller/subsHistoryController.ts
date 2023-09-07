// import { subscriptionHistory } from "../databaselogic/db_entity/subscriptionHistory"
// import { appDatasource } from "../databaselogic/db_config/config"
// import {Request,Response } from "express";


// export const addSubsDetails = async(req: Request, res:Response)=>{
//     try {
//         const subscriptionDetailRepo = appDatasource.getRepository(subscriptionHistory)
//         const { user_id, book_id, validTill }= req.body
//         const subscrption_History = new subscriptionHistory();
//         subscrption_History.book_id = book_id;
//         subscrption_History.user_id = user_id;
//         subscrption_History.validTill = validTill;

//         const subscriptionDB= await subscriptionDetailRepo.save(subscrption_History)

//         const subscriptionId = Number(req.params.id);
//         const subscriptionHistoryDb= await subscriptionDetailRepo.findOneBy({id: subscriptionId});
//         res.status(200).json(subscriptionDB);

//         } catch (error) {
//         res.status(500).json({message: 'Internal Server Error'})
//     }
// };
