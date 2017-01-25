const app = require('express')()
const server = require('http').createServer(app)
const host = '127.0.0.1'
const port = '3000'

app.set('port', port)
// Import API Routes
app.use('/api', require('./api/index'))
app.use('/api/users', require('./api/users'))

// Import and Set Nuxt.js options
let config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

app.get('/', function(req, res) {
    res.sendFile('index.html')
})

// Listen the server
server.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console