import express from 'express'
const app = express()
const port = 3000


let teaData=[];
let nextId=1;
app.use(express.json());
app.post("/teas",(req,res)=>{
  const {name,price}=req.body
  const tea={id:nextId,name,price}
  teaData.push(tea);
  nextId++
  res.status(201).send(tea)
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/teas",(req,res)=>{
  
  res.status(201).send(teaData)
})
//this below : is given for id 
app.get("/teas/:id",(req,res)=>{
const tea=teaData.find(t=>t.id==parseInt(req.params.id))
if(!tea){
  return res.status(404).send("no result");
}res.status(200).send(tea);
})

app.get('/hii', (req, res) => {
  res.send('Your inside the hiii')
})
app.get('/hello', (req, res) => {
  res.send('Hyour outside the hiii')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})