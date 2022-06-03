const { Worker } = require('worker_threads')
const calculationWorke = new Worker("./workers/fibbonachiCalculationWorker.js");

const express = require('express'),
 { apiRoot, port } = require('./config'),
 { fibonacciController } = require("./controllers")

const app = express()
app.post(`${apiRoot}/input`, fibonacciController.input)
app.get(`${apiRoot}/output`, fibonacciController.output)
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})