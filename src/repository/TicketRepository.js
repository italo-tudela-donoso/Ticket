class TicketRepository {
    constructor(TicketDAO, UserDAO, EventDAO) {
        this.ticketDAO = TicketDAO;
        this.userDAO = UserDAO;
        this.eventDAO = EventDAO;
    }

    async generateTicketCode() {
            return( "TICKET" + Math.random().toString());
    }

    async createTicket(email, eventId) {
        const user = await this.userDAO.findOne(email);
        if (!user) {
            throw new Error('No existe usuario');
        }

        const event = await this.eventDAO.findById(eventId);    
        if (!event) {
            throw new Error('No existe evento');
        }

        return await this.ticketDAO.create({ user: user._id, event: event._id, status: 'active', quantity, code: await this.generateTicketCode() });
    }

    async cancelTicket(ticketId) {
        return await this.ticketDAO.findByIdAndUpdate(ticketId, { status: 'cancelled' }, { new: true });
    }

    async findAll(filter) {
        return await this.ticketDAO.find(filter);
    }

    async findById(ticketId) {
        return await this.ticketDAO.findById(ticketId);
    }

    async findByUserEmail(email) {
       const user = await this.userDAO.findOne({         email   });
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        return await this.ticketDAO.find({ user: user._id   });
    }
    
}   

export default TicketRepository;