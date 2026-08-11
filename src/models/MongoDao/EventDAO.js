import eventModel from '../event.model.js';

class EventDAO {
    async create(event) {
        return await eventModel.create(event);
    }

    async update(eventId, update) {
        return await eventModel.findByIdAndUpdate(eventId, update);
    }

    async find(filter) {
        return await eventModel.find(filter).populate('organizer','id_ first_name last_name') ;
    }

    async findById(eventId) {
        return await eventModel.findById(eventId);
    }
}

export default new EventDAO();