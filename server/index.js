const express = require('express');

const app = express();
const port = 4000;



app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Looking good!'
        , status: 200
    })
});

app.post('/', (req, res) => {
    // https://aws.amazon.com/premiumsupport/knowledge-center/lambda-send-email-ses/
    
    return res.status(200).json({
        message: 'Looking good!'
        , status: 200
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});