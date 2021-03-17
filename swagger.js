///////////////////// VERSÃO 1 /////////////////////

const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./endpoints.js']

swaggerAutogen(outputFile, endpointsFiles)

////////////////////////////////////////////////////



///////////////////// VERSÃO 2 /////////////////////

// const swaggerAutogen = require('swagger-autogen')()

// const outputFile = './swagger_output.json'
// const endpointsFiles = ['./endpoints.js']

// swaggerAutogen(outputFile, endpointsFiles).then(() => {
//     require('./index.js')
// })

////////////////////////////////////////////////////