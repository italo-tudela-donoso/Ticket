import { Router } from 'express'
import { getEvent, createEvent, deleteEvent, getAll, updateEvent } from '../controllers/events.controllers.js'
import { validToken, autorizedRoles } from '../middlewares/session.middlewares.js';
import { validateAdminOrOwner } from '../middlewares/event.middlewares.js';


const router = Router()

router.get('/', getAll)
router.get('/', getEvent)

router.use(validToken);

router.post('/', autorizedRoles(['admin', 'organizer']), createEvent)
router.put('/:eid', validateAdminOrOwner, updateEvent);
router.delete('/:id', deleteEvent);

export default router;

/*
router.post('/:eid', createEvent)
router.put('/:eid', updateEvent)
router.delete('/:id', deleteEvent)
*/


