import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import  'express-async-errors'
import { authMiddleware,ResponseHandler ,globalErrorHandler,log} from './common/index.js';
import publisherRouter from './app/routes.js';


process.env.TZ = process.env.TIMEZONE;
const app = express()
app.use(express.json());
app.use(cors()); //* for Cross site access..
dotenv.config() // Dot env Package Initialize



// Middleware to parse URL-encoded data in the request body
app.use(express.urlencoded({ extended: true }));

//^ Global Error Handler
app.use(globalErrorHandler);
app.use(authMiddleware)




// Routes for the application


app.use('/publisher',publisherRouter)



// End of Routes for the application









// Redirect all Unknown requests to 404 page and send a response with status code 404.
app.all("*", (req,res)=>{
    ResponseHandler.error(res,"Page Not Found",404)
})






 // Start the server on the specified port.
app.listen(process.env.PORT,()=>{
    console.info(`Server is running on port ${process.env.PORT}`)
})