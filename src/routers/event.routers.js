import { Router } from 'express'
import { getEvents, createEvent } from '../controllers/events.controllers.js'

const router = Router()

router.get('/', getEvents)
router.post('/', createEvent)


export default router
