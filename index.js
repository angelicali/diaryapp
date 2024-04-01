const express = require('express');
const {readFile, readFileSync} = require('fs').promises;

const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', async (request, response)=>{
    response.send(await readFile('./index.html', 'utf-8'));
});


app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`) );


