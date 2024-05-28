import express, { response }  from "express"
import cors  from 'cors'
import data  from "./data.js"
const app = express()

app.use(cors());
app.get('/api/product', (req, res) =>{
res.send(data.products)
})

app.get('/api/product/:id', (req, res)=>{
   const product = data.products.find((x) => x._id === req.params.id)
   if(product){
    res.send();
   }else{
    res.status(404).send({message: 'Product Not Found'})
   }

})

app.listen(https://mubbashirbawany.github.io/, () => {
    console.log("server runing");
})
