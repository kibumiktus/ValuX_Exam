const status = require("http-status"),
 { fibonacciService } = require("../services")

async function input(req, res) {
    let number = req.params.number;
    if (!Number.isInteger(number)){
        res.status(status.UNPROCESSABLE_ENTITY)
        res.send("UNPROCESSABLE_ENTITY")
        return
    }
    var ticketId = await fibonacciService.createTicket(res);
    res.json({"ticket": ticketId})
}
async function output(req, res) {
    let ticket = req.query.ticket;
    if (!Number.isInteger(ticket)){
        res.status(status.UNPROCESSABLE_ENTITY)
        res.send("UNPROCESSABLE_ENTITY")
        return
    }
    
    var ticketInfo = await fibonacciService.getTicketInfo(res);
    if (!ticketInfo) {
        res.status(status.NOT_FOUND)
        res.send("NOT_FOUND")
        return
    }
    res.json({"Fibonacci": req.query.ticket})
}
module.exports = { input, output }