import ticketModel from "../ticket.model.js";  

class TicketDAO {
    async create(ticket) {
        return await ticketModel.create(ticket);
    }   

    async update(ticketId, update) {
        return await ticketModel.findByIdAndUpdate(ticketId, update);
    }   

    async find(filter) {
        return await ticketModel.find(filter).populate('event','id_ name date place price capacity status') ;
    }

    async findById(ticketId) {
        return await ticketModel.findById(ticketId);
    }   

    async findByIdAndUpdate(ticketId, update) {
        return await ticketModel.findByIdAndUpdate(ticketId, update);
    }   
    

}

export default new TicketDAO();