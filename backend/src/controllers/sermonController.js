import Sermon from '../models/Sermon.js';
import { listDocuments } from '../utils/listing.js';

export const listSermons = async (req, res, next) => {
  try {
    const { page, limit, published } = req.query;
    const data = await listDocuments({ model: Sermon, page, limit, published, sort: '-date' });
    return res.json(data);
  } catch (error) {
    return next(error);
  }
};

export const getSermon = async (req, res, next) => {
  try {
    const sermon = await Sermon.findById(req.params.id);
    if (!sermon) {
      return res.status(404).json({ message: 'Sermon not found' });
    }
    return res.json(sermon);
  } catch (error) {
    return next(error);
  }
};

export const createSermon = async (req, res, next) => {
  try {
    const sermon = await Sermon.create(req.body);
    return res.status(201).json(sermon);
  } catch (error) {
    return next(error);
  }
};

export const updateSermon = async (req, res, next) => {
  try {
    const sermon = await Sermon.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!sermon) {
      return res.status(404).json({ message: 'Sermon not found' });
    }
    return res.json(sermon);
  } catch (error) {
    return next(error);
  }
};

export const deleteSermon = async (req, res, next) => {
  try {
    const sermon = await Sermon.findByIdAndDelete(req.params.id);
    if (!sermon) {
      return res.status(404).json({ message: 'Sermon not found' });
    }
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};
