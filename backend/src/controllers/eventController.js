import Event from '../models/Event.js';
import { listDocuments } from '../utils/listing.js';

export const listEvents = async (req, res, next) => {
  try {
    const { page, limit, published } = req.query;
    const data = await listDocuments({ model: Event, page, limit, published, sort: 'date' });
    return res.json(data);
  } catch (error) {
    return next(error);
  }
};

export const getEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    return res.json(event);
  } catch (error) {
    return next(error);
  }
};

export const createEvent = async (req, res, next) => {
  try {
    const event = await Event.create(req.body);
    return res.status(201).json(event);
  } catch (error) {
    return next(error);
  }
};

export const updateEvent = async (req, res, next) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    return res.json(event);
  } catch (error) {
    return next(error);
  }
};

export const deleteEvent = async (req, res, next) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};
