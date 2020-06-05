const app = require('express')()

let works = 0

app.get('/',(req,res)=>{
    works++
    res.send('working no +' + works)
})

app.listen(80,()=>{
    console.log('auth service running')
})