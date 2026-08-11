import { Router } from 'express'
import { getEvent, createEvent, deleteEvent, getAll, updateEvent } from '../controllers/event.controllers.js'
import { validToken, autorizedRoles } from '../middlewares/session.middlewares.js';
import { validateAdminOrOwner, validateParam } from '../middlewares/event.middlewares.js';

const router = Router()

router.param('eid', validateParam);

router.get('/', getAll)
router.get('/:eid', getEvent)

router.use(validToken);

router.post('/', autorizedRoles(['admin', 'organizer']), createEvent)
router.put('/:eid', validateAdminOrOwner, updateEvent);
router.delete('/:eid', deleteEvent);

export default router;




