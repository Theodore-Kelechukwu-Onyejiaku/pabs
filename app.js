const express = require("express");
const app = express();

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use(cors());
//Use of cookies
app.use(cookieParser());



app.use(express.static("oneschool"))


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log("Server running succesfully on port:"+PORT)
})