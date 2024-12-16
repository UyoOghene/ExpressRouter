const express = require('express')
const app = express();
const shelterRoutes = require('./Routes/shelters');
const dogRoutes = require('./Routes/dogs');
const adminRoutes = require('./Routes/admin');
const cookieParser = require('cookie-parser');


app.use(cookieParser());
app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admin', adminRoutes);


app.get('/greet',(req,res)=> {
    console.log(req.cookies)
    res.send('greet')
})

app.get('/setnamecookies',(req,res)=>{
    res.cookie('name','hetta')
    res.cookie('book', 'harry')
    res.send('hi')
})

app.listen(3000, ()=>{
    console.log('lstening on 3000')
})