const express = require('express')
const app = express();

const shelterRoutes = require('./Routes/shelters')
const dogRoutes = require('./Routes/dogs')

app.use('/shelters', shelterRoutes)
app.use('/dogs', dogRoutes)

app.listen(3000, ()=>{
    console.log('lstening on 3000')
})