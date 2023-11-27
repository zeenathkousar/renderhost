const express = require('express');
const Brand = require('./Models/brand');
const dbConn = require('./dbconnect')

require('dotenv').config()
const app = express();//initializing express after requiring
const port = process.env.PORT || 3000;
dbConn()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.post('/addbrands', async (req, res) => {
    const { brandname } = req.body;
    try {
        const newData = new Brand({ brandname });
        await newData.save();
        const Bd = await Brand.find()
        return res.status(200).json({ data: Bd })
    }
    catch (err) {
        res.status(400).json({ err: err.message })
    }
})
app.get('/home', (req, res) => {
    res.send('<h1>Home</h1>')
})
app.get('/getallbrands', async (req, res) => {
    try {
        const allData = await Brand.find({});
        return res.status(200).json({ data: allData });
    }
    catch (err) {
        res.status(400).json({ err: err.message })
    }
})
app.get('/getallbrands/:id', async (req, res) => {
    try {
        const Data = await Brand.findById(req.params.id);
        return res.status(200).json({ data: Data });
    }
    catch (err) {
        res.status(400).json({ err: err.message })
    }
})
app.delete('/deletebrand/:id', async (req, res) => {
    try {
        await Brand.findByIdAndDelete(req.params.id);
        let data = await Brand.find({})
        return res.json({ data })
    }
    catch (err) {
        return res.status(400).json({ err: err.message })
    }
})

app.listen(port, () => {
    console.log('server is runing on port 3000')
})