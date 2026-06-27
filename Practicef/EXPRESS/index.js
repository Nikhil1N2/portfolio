const express = require('express');
const bodyParser = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

//Middleware
app.use(bodyParser.json());

//Connect to MongoDB
mongoose.connect('mongodb+srv://nikhiltest:nikhilpaswan@cluster0.60bwunz.mongodb.net/ExpressCRUD?appName=Cluster0')
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

//define a simple schema and model
const itemSchema = new mongoose.Schema({
    name:String,
    description:String,
});

const Item = mongoose.model('Item',itemSchema);

//create
app.post('/items',async(req,res) =>{
    try{
        const newItem = new Item(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    }catch(err){
        res.status(400).json({message:err.message });
    }
});

//read
app.get('/items',async(req,res) =>{
    try{
        const items = await Item.find();
        res.json(items);
    }catch(err){
        res.status(500).json({message:err.message });
    }
});

//delete
app.delete('/items/:id',async(req,res) =>{
    try{
        const deleteItem = await Item.findByIdAndDelete(req.params.id);
        if(!deleteItem){
            return res.status(404).json({message:'Item not found'});
        }
        res.json({message:'Item deleted successfully'});
    }catch(err){
        res.status(500).json({message:err.message });
    }
});

//update
app.put('/items/:id',async(req,res) =>{
    try{
        const updatedItem = await Item.findByIdAndUpdate(req.params.id,req.body,{new : true });
        if(!updatedItem){
            return res.status(404).json({message:'Item not found'});
        }
        res.json(updatedItem);
    }catch(err){
        res.status(400).json({message:err.message });
    }
});

app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}`);
});