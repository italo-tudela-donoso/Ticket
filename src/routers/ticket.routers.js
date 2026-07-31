import { Router } from 'express'
import passport from 'passport';
import { getAllTickets, getMyTickets, getTicketById, purchaseTicket, cancelTicket } from '../controllers/tickets.controllers.js'
import { validToken,autorizedRoles } from '../middlewares/session.middlewares.js';


const router = Router()

router.get( "/my-tickets", validToken,getMyTickets);
router.get('/:tid', validToken, getTicketById);
router.get('/', autorizedRoles(['admin','organizer']), getAllTickets);

router.post('/:eid',validToken, purchaseTicket);
router.patch('/:tid/:eid', validToken,cancelTicket);

export default router


