import ticketModel from '../models/ticket.model.js';
import userModel from '../models/user.model.js';
import { enviarMail } from './mail.service.js';

import { getEventIdService } from './event_service.js';

function generateTicketCode() {
    return( "TICKET" + Math.random().toString());
}

export async function getAllTicketsService(req, res) {

}

export async function getMyTicketsService(req, res) {

}
    
export async function getTicketByIdService(req, res ) {
    
}

export async function purchaseTicketService( req ) {
    try {
        const event = await getEventIdService( req );
        const user = await userModel.findOne({email:req.user.email});

        const { quantity } = req.body;

        if (event==null) throw new Error('event no existe');
        if (user==null) throw new Error('usuario no existe');

        const ticket = await ticketModel.create( {
            user: user,
            event: event,
            status: 'active',
            quantity: quantity,
            code: generateTicketCode()
        }) ;

        enviarMail(user.email, 'Gracias por tu compra', `<h1> Tu ticket ${ticket.code}</h1>`, '')
        return ticket;
    }
    catch( error ) { throw error;     }
        
}

export async function cancelTicketService(req) {

}