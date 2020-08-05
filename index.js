const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.sendFile('/Users/mars/Desktop/GA/unit-2/homework/views/index.html')
})

app.get('/about', (req,res) => {
    res.sendFile('/Users/mars/Desktop/GA/unit-2/homework/views/about.html')
})

app.get('/blog', (req,res) => {
    res.sendFile('/Users/mars/Desktop/GA/unit-2/homework/views/blog-directory.html')
})

app.listen(8000, () => {
    console.log("Listening to port 8000");
})
