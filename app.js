const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 3001;

app.use(express.static('views' ))

app.use('/merch', function(_,res){
    res.render('merch.hbs')
})

app.use ('/', function(_,res){
    res.render('home.hbs')
} )


app.listen(port, '127.0.0.1', function(){
    console.log('start http://localhost:%s', port )
})