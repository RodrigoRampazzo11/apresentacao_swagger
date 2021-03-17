///////////////////// VERSÃO 1 /////////////////////

const app = require('express')()
const http = require('http')

http.createServer(app).listen(3000)
console.log("Listening at:// port:%s (HTTP)", 3000)

require('./endpoints')(app)

////////////////////////////////////////////////////




///////////////////// VERSÃO 2 /////////////////////

// const app = require('express')()
// const http = require('http')
// const swaggerUI = require('swagger-ui-express');
// const swaggerFile = require('./docSwagger.json')

// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

// http.createServer(app).listen(3000)
// console.log("Listening at:// port:%s (HTTP)", 3000)

// require('./endpoints')(app)

////////////////////////////////////////////////////




///////////////////// VERSÃO 3 /////////////////////

// const app = require('express')()
// const http = require('http')
// const swaggerUI = require('swagger-ui-express');
// const swaggerFile = require('./swagger_output.json')

// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

// http.createServer(app).listen(3000)
// console.log("Listening at:// port:%s (HTTP)", 3000)

// require('./endpoints')(app)

////////////////////////////////////////////////////