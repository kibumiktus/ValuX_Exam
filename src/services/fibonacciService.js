const { v4:uuidv4 } = require('uuid'),
{ fibonacciTicketRepository } = require('../db')

async function getTicketInfo(ticketId) {
    let dbInfo = await fibonacciTicketRepository.getTicketInfo(ticketId)
    return {
        Fibonacci: dbInfo.fibonacciNumber,
        Number: dbInfo.index
    }
}
async function createTicket(fibonacciNumber) {
    let ticketId = uuidv4()
    await fibonacciTicketRepository.createTicket({
        _id : ticketId,
        index: fibonacciNumber
    })
    return ticketId
}
module.exports = { getTicketInfo, createTicket }