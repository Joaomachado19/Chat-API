require("dotenv").config();
const app = require("../src/api");

app.use((req,res,next)=>{
    next();
});
console.log(process.env.API_PORT);