import eventModel from '../models/event.model.js';
import userModel from '../models/user.model.js';

export async function getAllService(rep) {
    const filter = {}
    if (req.query.category) {
        let category = req.query.category;
        category[0] = category[0].toUpperCase();
        console.log(req.query.category);
        filter.category = category;
    }

    if (req.query.place) {
        let place = req.query.place;
        place[0] = place[0].toUpperCase();
        console.log(req.query.place);
        filter.place = place;
    }

}

export async function createEventService (req) {
    const { name, date, place, price, capacity, status, category } = req.body;

    validateDate(date);

    const user = await userModel.findOne({ email: req.user.email });    

    const event = await eventModel.create({ 
        name: name, 
        date: date,
        place: place, 
        price: price, 
        capacity: capacity, 
        status: status, 
        category: category,
        organizer: user._id
    });

    return event;
}

export async function updateEventService(req) {
    const event = await eventModel.findById(req.params.eid);    
    validateDate(event.date);
    await eventModel.updateOne(req.body, {new: true});
    await event.save();
    return event;
}

export async function deleteEventService(req) {
    const event = req.event;
    console.log(event);
    await event.deleteOne();
    return event;
}

export async function getEventIdService(req) {
    const event = await eventModel.findById(req.params.eid).populate('organizer');
    if (event == null) throw new Error('Evento no encontrado');
    else return event;
}