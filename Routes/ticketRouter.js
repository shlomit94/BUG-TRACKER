const express = require('express');
const router = express.Router();
const ticketBL = require('../BLs/ticketBL');

router.post('/', async(req, res) => {
    try {
        const ticketObj = req.body
        const newTicket = await ticketBL.createTicket(ticketObj);
        res.status(200).json(newTicket)
    } catch(error) {
        res.status(500).json(error)
    }
})

router.get('/', async(req, res) => {
    try {
        const tickets = await ticketBL.getAllTickets();
        res.status(200).json(tickets)
    } catch(error) {
        res.status(500).json(error)
    }
})

router.get('/ticketId/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const ticket = await ticketBL.getTicketByID(id);
        res.status(200).json(ticket)
    } catch(error) {
        res.status(500).json(error)
    }
})

router.get('/:title', async(req, res) => {
    try {
        const {title} = req.params;
        const ticket = await ticketBL.getTicketByTitle(title);
        res.status(200).json(ticket)
    } catch(error) {
        res.status(500).json(error)
    }
})

router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const ticketObj = req.body;
        const updatedTicket = await ticketBL.updateTicket(id, ticketObj);
        res.status(200).json(updatedTicket)
    } catch(error) {
        res.status(500).json(error)
    }
})

router.delete('/:id/', async(req, res) => {
    try {
        const {id} = req.params;
        const deletedTicket = await ticketBL.deleteTicket(id);
        res.status(200).json(deletedTicket)
    } catch(error) {
        res.status(500).json(error)
    }
})

module.exports = router;