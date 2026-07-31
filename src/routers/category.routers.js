import { Router } from "express";
import { createCategory, getAll} from "../controllers/category.controllers.js";

import { validToken, autorizedRoles } from "../middlewares/session.middlewares.js";
import { validateAdminOrOwner, validateParam } from "../middlewares/event.middlewares.js";

const router = Router();

router.get('/', getAll);

router.use(validToken);

router.post('/', autorizedRoles(['admin', 'organizer']), createCategory);

export default router;
