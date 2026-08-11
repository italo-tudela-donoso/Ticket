import EventRepository from './EventRepository.js';
import TicketRepository from './TicketRepository.js';
import UserRepository from './UserRepository.js';


import EventDAO from '../models/MongoDao/EventDAO.js';
import UserDAO from '../models/MongoDao/UserDAO.js'; 
import CategoryDAO from '../models/MongoDao/CategoryDAO.js';
import TicketDAO from '../models/MongoDao/TicketDAO.js';

export const eventRepository = new EventRepository(EventDAO, UserDAO, CategoryDAO);
export const ticketRepository = new TicketRepository(TicketDAO, UserDAO, EventDAO);
export const userRepository = new UserRepository(UserDAO);

