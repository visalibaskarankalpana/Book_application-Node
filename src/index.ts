import express from "express";
import { appDatasource } from "./databaselogic/db_config/config";
import { routes } from "./routes/routes";

const app = express();
app.use(express.json());


const route = new routes()
app.use(route.router);

// import cors from 'cors'
// app.use(cors())

//**********************Import the Swagger Routes

import{RegisterRoutes} from '../build/routes'
RegisterRoutes(app)
//*********************************Import Swagger
const swaggerUi = require('swagger-ui-express')
const swaggerDOC = require ('../build/swagger.json')

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDOC))
console.log("Connected to Swagger")





//############ USER ##################
// app.get('/getUserById/:id',getUserById);
// app.put('/updateUser/:id',updateUser);

// //############## BOOK ################
// app.get('/getBook',getBook );
// app.get('/getBookById/:id',getBookById);
// app.post('/addBook',addBook);
// app.put('/updateBook/:id',updateBook);
// app.delete('/deletebook/:id',deleteBook);

//*****************Subscription Details***/
// app.get('getSubsDetail', subscriptionDetails);
// app.get('/getSDById/:id',subscriptionDetailsById);
//app.post('/subscriptionDetail', addSubsDetails);
// app.update('/updateSB/:id',updateSubscriptionDetail);
// app.delete('/deleteSB/:id',deleteSubsDetail);

//********************AUTHENTICATION********* */
// app.get('/',demo)
//app.post('/login',loginUser)



appDatasource.initialize()
  .then(()=>{
    
    console.log(`Connected to DB`);

   })
   .catch((error: any) => console.log("TypeORM connection error: ", error));
   

app.listen(8080, () => {
  console.log("App is running in http://localhost:8080")
})



