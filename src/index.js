const express = require('express')
const app = express()
const port = process.env.PORT | 5000

app.get('/', (req, res) => {
    res.send('Test Server is running')
})

app.listen(port, () => {
    console.log(`Test server listening on port ${port}`)
})