
const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const cors = require("cors");
const app = express();
const User = require("./models/User");

app.use(cors());
//express body parser middleware


app.use(express.json());

app.use(express.static(path.resolve(__dirname, "../dist")));


mongoose.connect("mongodb://localhost/sajawalPractice", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => {
        console.log("DB connected to Sajawal");
    })
    .catch(err => {
        console.log(err);

    })



app.get("/api/data", (req, res) => {
    res.json({
        name: "asim",
        age: 56,
    })
});

app.post("/api/user", (req, res) => {
    User.create(req.body).then(user => {
        res.json(user);

    })

})


app.get("/api/user", (req, res) => {
    User.find({}).then(users => {
        res.json(users)
    })
})











const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`app listening on port ${port}`));

//connecting to mongodb
// mongoose
//     .connect("mongodb://localhost/Testing",
//         {
//             useNewUrlParser: true,
//             useCreateIndex: true,
//             useFindAndModify: false,
//         })
//     .then(() => console.log("Database Connected to ResturantBlog    "))
//     .catch(err => console.log("connection error occured:", err))


// use ROUTES



// listening to port

