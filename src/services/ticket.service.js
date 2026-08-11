import { ticketRepository } from '../repository/index.js';  
import { enviarMail } from './mail.service.js';
import { getEventIdService } from './event.service.js';


export async function getAllTicketsService(req, res) {
    return await ticketRepository.findAll();

}

export async function getMyTicketsService(req, res) {
    const tickets = await ticketRepository.findByUser(req.user.email);
    if (!tickets) throw new Error('No se encontraron tickets para este usuario');
    return tickets;
 
}
    
export async function getTicketByIdService(req, res ) {
    const ticket = await ticketRepository.findById(req.params.tid);
    if (!ticket) throw new Error('Ticket no encontrado');
    return ticket;
    
}

export async function purchaseTicketService( req ) {
    try {
        const event = await getEventIdService( req );
        if (!event){ 
            throw new Error('Evento no encontrado');
        } 

        const { quantity } = req.body;

        const ticket = await ticketRepository.createTicket(
            req.user.email, 
            event._id, 
            quantity);

        enviarMail(req.user.email, 
                    'Gracias por tu compra', 
                    `<h1> Tu ticket ${ticket.code}</h1>`, 
                    '')
        return ticket;
    }
    catch( error ) { throw error;     }
        
}

export async function cancelTicketService(req) {
    const ticket = await ticketRepository.cancelTicket(req.params.tid);
    if (!ticket) throw new Error('Ticket no encontrado');
    return ticket;  

}