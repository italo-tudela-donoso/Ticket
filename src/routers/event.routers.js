import { Router } from 'express'
import { getEvent, createEvent, deleteEvent, getAll, updateEvent } from '../controllers/events.controllers.js'

const router = Router()

router.get('/', getAll)
router.get('/', getEvent)

router.post('/:eid', createEvent)
router.put('/:eid', updateEvent)
router.delete('/:id', deleteEvent)


export default router
