class EventRepository { 
    constructor(EventDAO, UserDAO, CategoryDAO) {
        this.eventDAO = EventDAO;
        this.userDAO = UserDAO;
        this.categoryDAO = CategoryDAO;
    }   

    async findAll(filter) {
        return await this.eventDAO.find(filter);
    }

    async createEvent(email, name, date, place, price, capacity, status, category) {
        const user = await this.userDAO.findOne( email );
        const cate = await this.categoryDAO.findOne(category);
        const event =  await this.eventDAO.create({
            name,
            date,
            place,
            price,
            capacity,
            status,
            organizer: user._id,
            category: cate._id
        });
        return event;


    }


}

export default EventRepository;