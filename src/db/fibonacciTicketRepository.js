const { FibonacciTicketSchema } = require("./mongoConnection")

async function createTicket(model) {
    await FibonacciTicketSchema.create(model)
    return model
}
async function getTicket(id) {
    return await FibonacciTicketSchema.findById(id)
}
async function updateTicket(id, model) {
    return await FibonacciTicketSchema.findByIdAndUpdate(id, model)
}
module.exports = { createTicket, getTicket, updateTicket }
