
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
//const bodyparser = require('body-parser');
app.use(cors());
app.use(express.json());
//app.use(bodyparser.json);
app.get('/', (req, res) => {
    res.send('hello world');
})
//mongodb configuration

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
const uri = "mongodb+srv://book-store:asl9znRKPPxu69an@cluster0.dsdvlc7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // create a collection of document
        const booksCollections = client.db("BookInventory").collection("books");
        //insert a book to the db: post method
        app.post("/upload-books", async(req,res)=>{
            const data = req.body;
            const result = await booksCollections.insertOne(data);
            res.send(result);
        })
    

  
        //update book data
       app.patch("/books/:id", async(req,res)=>{
         const id = req.params.id;
        const updateBookData = req.body;
        const filter = {_id: new ObjectId(id)};
        const updateDoc = {
            $set: {
              ...updateBookData
            },
          }
          const options = {upsert: true};
        const result = await booksCollections.updateOne(filter,updateDoc,options);
        res.send(result);
       }) 
       // delete
       app.delete("/book/:id",async(req,res)=>{
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const result = await booksCollections.deleteOne(filter);
        res.send(result);
       })  
       //find by category
       app.get("/all-books",async(req,res)=>{
        let query ={};
        if(req.query?.category){
            query = {category: req.query.category}
        }
        const result = await booksCollections.find(query).toArray();
        res.send(result);
       }) 
       app.get("/book/:id",async(req,res)=>{
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const result = await booksCollections.findOne(filter);
        res.send(result);
       })
    
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        
    }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})
