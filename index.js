const express=require('express');
const { routes } = require('./Routes');


const app = express();
const cors = require('cors');
const { Connection } = require('./config/db');

app.use(cors({
    origin:"*"
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use('/api',routes)


app.listen(2828,async()=>{
    try{
         Connection();
        console.log("server is running at port 2828.........")
    }
    catch(err){
        console.log("failed....")
    }

    

     

 })
 