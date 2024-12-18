const express = require('express')
const app = express();
const shelterRoutes = require('./Routes/shelters');
const dogRoutes = require('./Routes/dogs');
const adminRoutes = require('./Routes/admin');
const cookieParser = require('cookie-parser');


app.use(cookieParser('secret'));
app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admin', adminRoutes);


app.get('/greet',(req,res)=> {
    // const {name,book} = req.cookies;

    // console.log(req.cookies)
    res.send(req.cookies)
})

app.get('/setnamecookies',(req,res)=>{
    res.cookie('name','hetta')
    res.cookie('book', 'harry')
    res.send('hi')
})

app.get('/signedcookie', (req,res)=>{
    res.cookie('fruit','grape', {signed: true});
    res.cookie('movie','twilight', {signed: true});
    res.send('sent fruit')
})
app.get('/verifysignedcookie', (req,res)=>{
    // console.log(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})



app.listen(3000, ()=>{
    console.log('lstening on 3000')
})