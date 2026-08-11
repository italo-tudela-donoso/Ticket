import { response } from "express"
import { getAllTicketsService,    
         getMyTicketsService,    
         getTicketByIdService,    
         purchaseTicketService,    
         cancelTicketService 

        } from "../services/ticket.service.js"

export async function getAllTickets(req, res) {
    try {
        const tickets = await getAllTicketsService(req, res);
        res.status(200).json({data:tickets})
    }
    catch {
        res.status(500).json({error:error.toString()})
    }
}

export async function getTicketById(req, res) {
    try{
        const ticket = await getTicketByIdService(req, res);
        res.status(200).json({data:ticket})
    }
    catch( error ){
        res.status(500).json({error:error.toString()});
    }
}

export async function getMyTickets(req, res) {
    try{
        const tickets = await getMyTicketsService(req);
        res.status(200).json({data:tickets  })
    }
    catch( error ){
        res.status(500).json({error:error.toString()});
    }
}

export async function purchaseTicket(req, res) {
    try{
        const ticketCreado = await purchaseTicketService( req );
         res.status(201).json({data:ticketCreado})
    }
    catch(error){
        res.status(500).json({error:error.toString()});
    }
    
}

export async function cancelTicket(req, res) {
    try{
        const ticketCancelado = await cancelTicketService(req);
        res.status(200).json({data:ticketCancelado})
    }
    catch( error ){
        res.status(500).json({error:error.toString()})
    }
}
    





