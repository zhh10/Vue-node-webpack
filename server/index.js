import express from "express" 
import path from "path" 

const app = express() 
const staticPath = path.resolve(__dirname,'public')
app.use(express.static(staticPath)) 

const port = 10000 
app.listen(port,()=>{
    console.log(`开启HTTP服务,端口号为${port}`)
})
