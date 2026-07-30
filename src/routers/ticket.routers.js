import { Router } from 'express'
import { getAllTickets, getTicketById, purchaseTicket } from '../controllers/tickets.controllers.js'

const router = Router()

router.get('/', getAllTickets);
router.get('/:tid', getTicketById);
router.post('/:euid/:eid', purchaseTicket);

export default router


