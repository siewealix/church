import Ministry from '../models/Ministry.js';
import { listDocuments } from '../utils/listing.js';

export const listMinistries = async (req, res, next) => {
  try {
    const { page, limit, published } = req.query;
    const data = await listDocuments({ model: Ministry, page, limit, published, sort: 'name' });
    return res.json(data);
  } catch (error) {
    return next(error);
  }
};

export const getMinistry = async (req, res, next) => {
  try {
    const ministry = await Ministry.findById(req.params.id);
    if (!ministry) {
      return res.status(404).json({ message: 'Ministry not found' });
    }
    return res.json(ministry);
  } catch (error) {
    return next(error);
  }
};

export const createMinistry = async (req, res, next) => {
  try {
    const ministry = await Ministry.create(req.body);
    return res.status(201).json(ministry);
  } catch (error) {
    return next(error);
  }
};

export const updateMinistry = async (req, res, next) => {
  try {
    const ministry = await Ministry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ministry) {
      return res.status(404).json({ message: 'Ministry not found' });
    }
    return res.json(ministry);
  } catch (error) {
    return next(error);
  }
};

export const deleteMinistry = async (req, res, next) => {
  try {
    const ministry = await Ministry.findByIdAndDelete(req.params.id);
    if (!ministry) {
      return res.status(404).json({ message: 'Ministry not found' });
    }
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};
