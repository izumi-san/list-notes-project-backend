//Aqui vai o express para escutar a 'port'
const express = require('express');

const app = express();
const port = 3000;

app.listen(port, ()=> {
    console.log(`Listening to port ${port}`);
});

app.get('/', (req, res)=> {
    res.send('Home page /')
})