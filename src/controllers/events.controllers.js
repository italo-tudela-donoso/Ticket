const getEvents = async (req, res) => {
    try {
        const events = await Event.find()
        res.json(events)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los eventos' })
    }
}

const createEvent = async (req, res) => {
    try {
        const { name, date, location } = req.body
        const newEvent = new Event({ name, date, location })
        await newEvent.save()
        res.status(201).json(newEvent)
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el evento' })
    }
}

export { getEvents, createEvent }   
