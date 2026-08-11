import { Router } from 'express'
import { getAll, getUser, updateUser } from '../controllers/users.controllers.js'

const router = Router()

router.get('/', getAll)
router.get('/:email', getUser)

router.put('/:email', updateUser)

export default router


