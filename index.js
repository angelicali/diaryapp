const express = require('express');
// const firebase = require('firebase');
// const firebaseConfig = require('./config');

global.tempDB = {};

// firebase.initializeApp(firebaseConfig);

const app = express();
app.use(express.static('public'));
app.use(express.json());


app.get('/entry', async (req, res)=>{
    console.log(global.tempDB);
    res.status(200).json({entryContent: global.tempDB["testuser"]});
});

app.post('/entry', async (req, res) => {
    global.tempDB["testuser"] = req.body;
    res.status(200).send("received");
})


app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`) );


