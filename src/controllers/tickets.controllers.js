import { response } from "express"
import { getAllTicketsService,    getMyTicketsService,    
         getTicketByIdService,    purchaseTicketService,    
         cancelTicketService 

        } from "../services/ticket.service.js"

export async function getAllTickets(req, res) {
    try {
        res.status(200).json({data:"getAllTickets"})
    }
    catch {
        res.status(500).json({error:error.toString()})
    }
}

export async function getTicketById(req, res) {
    try{
        res.status(200).json({data:"getTicketById"})
    }
    catch( error ){
        res.status(500).json({error:error.toString()});
    }
}

export async function getMyTickets(req, res) {
    try{
        res.status(200).json({data:"getMyTickets"})
    }
    catch( error ){
        res.status(500).json({error:error.toString()});
    }
}

export async function purchaseTicket(req, res) {
    try{
        const ticketCreado = await purchaseTicketService( req );
         res.status(200).json({data:ticketCreado})
    }
    catch(error){
        res.status(500).json({error:error.toString()});
    }
    
}

export async function cancelTicket(req, res) {
    try{
        res.status(200).json({data:"cancelTicket"})
    }
    catch( error ){
        res.status(500).json({error:error.toString()})
    }
}
    





