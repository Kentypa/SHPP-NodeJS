const express = require('express')
const app = express()
const port = 8000
let counter = 0;

app.get('/hello', (req, res) => {
    res.send(`Hello World! counter value now: ${counter++}`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})