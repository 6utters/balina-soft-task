const jsonServer = require('json-server')
const path = require("path");

const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

server.use(async (req, res, next) => {
    await new Promise(res => {
        setTimeout(res, 800)
    })
    next()
})

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

server.use(router)

server.listen(8000, () => {
    console.log('The server has been started on port 8000')
})
