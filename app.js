const express = require("express");
const app = express();


app.use(express.static("oneschool"))

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log("Server running succesfully on port:"+PORT)
})