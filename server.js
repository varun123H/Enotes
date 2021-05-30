const express = require('express');
const app = express();
const port =  3000;
const path = require('path')
var subjects = require('./routes/subjects.js');



//both index.js and things.js should be in same directory
app.use('/subjects', subjects); 
app.use('/subjects/signal', subjects); 
app.use('/subjects/emft', subjects); 
app.use('/subjects/os', subjects);
app.use('/subjects/arm', subjects);
app.use('/subjects/analog', subjects);
app.use('/subjects/maths', subjects);

app.use(express.static('views'));
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, 'views' ,'index.html'));
});


app.listen(port , () => {
    console.log('Server started on ', 3000)
})