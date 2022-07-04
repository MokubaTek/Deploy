const http = require('http')
const server = http.createServer((req, res) =>{
    console.log('new Connection')
    res.end('ready to start messing it up')
})
const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Listening...'))
