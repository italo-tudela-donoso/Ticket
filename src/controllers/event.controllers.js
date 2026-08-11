import { createEventService, deleteEventService, getAllService, getEventIdService, updateEventService } from "../services/event.service.js";
         
export async function getAll(req, res) {
    try {
        const events = await getAllService(req);
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
}

export async function getEvent(req, res) {
    try {
        const events = await getEventIdService(req);
        res.status(200).json(events)
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
}

export async function createEvent (req, res) {
    try {
        const event = await createEventService(req);
        res.status(201).json({ data: event });
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
}

export async function updateEvent(req, res){
    try {
        const event = await updateEventService(req);
        res.status(200).json({ message: "evento actualizado", data: event });
    } catch (error) {
        res.status(500).json({ error:error.toString() });
    }
}

export async function deleteEvent(req, res){
    try {
        const event = await deleteEventService(req);
        res.status(200).json({ message: "evento borrado", data: event });
    } catch (error) {
        res.status(400).json({ error:error.toString() });
    }
}

