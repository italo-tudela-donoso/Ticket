import EventDAO from '../models/MongoDao/EventDAO.js';
import UserDAO from '../models/MongoDao/UserDAO.js';
import { eventRepository } from '../repository/index.js';

import { validateDate } from '../utils.js';


export async function getAllService(rep) {
    const filter = {}

    if (req.query.category) {
        let category = req.query.category;
        category[0] = category[0].toUpperCase();
        console.log(req.query.category);
        filter.category = category;
    }

    if (req.query.place) {
        filter.place = req.query.place;
    }

    return await eventRepository.findAll(filter);

}

export async function createEventService (req) {
    const { name, date, place, price, capacity, status, category } = req.body;

    validateDate(date);

    return await eventRepository.createEvent(req.user.email, name, date, place, price, capacity, status, category);
    
}

export async function updateEventService(req) {
    const event = await EventDAO.findById(req.params.eid);
    validateDate(event.date);
    await EventDAO.update(event._id, req.body);
    return event;
}

export async function deleteEventService(req) {
    const event = req.event;
    console.log(event);
    await event.deleteOne();
    return event;
}

export async function getEventIdService(req) {
    const event = await EventDAO.findById(req.params.eid);
    event.populate('organizer');
    if (event == null) throw new Error('Evento no encontrado');
    else return event;
}