const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aditya:aditya@cluster0.xykz0mt.mongodb.net/items?retryWrites=true&w=majority').then(()=>{
    console.log("connected to db")
})
