import GalleryItem from '../models/GalleryItem.js';
import { listDocuments } from '../utils/listing.js';

export const listGalleryItems = async (req, res, next) => {
  try {
    const { page, limit, published } = req.query;
    const data = await listDocuments({ model: GalleryItem, page, limit, published, sort: '-createdAt' });
    return res.json(data);
  } catch (error) {
    return next(error);
  }
};

export const getGalleryItem = async (req, res, next) => {
  try {
    const item = await GalleryItem.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    return res.json(item);
  } catch (error) {
    return next(error);
  }
};

export const createGalleryItem = async (req, res, next) => {
  try {
    const item = await GalleryItem.create(req.body);
    return res.status(201).json(item);
  } catch (error) {
    return next(error);
  }
};

export const updateGalleryItem = async (req, res, next) => {
  try {
    const item = await GalleryItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    return res.json(item);
  } catch (error) {
    return next(error);
  }
};

export const deleteGalleryItem = async (req, res, next) => {
  try {
    const item = await GalleryItem.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};
