const  express = require( 'express');
const cookieParser = require('cookie-parser')
const  userRouter = require( './routes/userRoutes')



const app = express();
// //body parser, reading data from body into req.body
app.use(express.json({limit: '10kb'}));
app.use(cookieParser());


//mounting route
app.use('/api/v1/users', userRouter)
















module.exports = app