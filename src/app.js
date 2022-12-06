//? Dependencias
const express = require('express')

//? Routers
const userRouter = require('./users/users.router')

//? Initial Config
const port = 9001
const app = express()

//? Json request available
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'ok'
    })
})

app.use('/api/v1', userRouter)


//? start server 
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})