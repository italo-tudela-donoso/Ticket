import eventModel from '../models/event.model.js';
import userModel from '../models/user.model.js';    


export async function validateAdminOrOwner(req, res, next) {
    try {
        const event = await eventModel.findById(req.params.eid);
        const user = await userModel.findOne({ email: req.user.email });
        if (event==null) {
            return res.status(404).json({ message: 'Evento no encontrado' });
        }
        if (user==null) {
            return res.status(404).json({ message: 'Sin Login' });
        }

        if (user.role === 'admin') {
            next();
        } 
        else if (user.role === 'organizer' && event.organizer.toString() === user._id.toString()) {
            next();
        } 
        else {
            return res.status(403).json({ message: '(403) No tienes permiso para modificar este evento' });
        }
    }
     catch (error) {
        res.status(500).json({ error:error.toString() });
    }      
}