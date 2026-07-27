const getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find()
        res.json(tickets)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los tickets' })
    }
}

const createTicket = async (req, res) => {
    try {
        const { name, price, eventId } = req.body
        const newTicket = new Ticket({ name, price, eventId })
        await newTicket.save()
        res.status(201).json(newTicket)
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el ticket' })
    }
}

export { getTickets, createTicket }     
