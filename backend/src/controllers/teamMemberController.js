import TeamMember from '../models/TeamMember.js';
import { listDocuments } from '../utils/listing.js';

export const listTeamMembers = async (req, res, next) => {
  try {
    const { page, limit, published } = req.query;
    const data = await listDocuments({ model: TeamMember, page, limit, published, sort: 'order' });
    return res.json(data);
  } catch (error) {
    return next(error);
  }
};

export const getTeamMember = async (req, res, next) => {
  try {
    const member = await TeamMember.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ message: 'Team member not found' });
    }
    return res.json(member);
  } catch (error) {
    return next(error);
  }
};

export const createTeamMember = async (req, res, next) => {
  try {
    const member = await TeamMember.create(req.body);
    return res.status(201).json(member);
  } catch (error) {
    return next(error);
  }
};

export const updateTeamMember = async (req, res, next) => {
  try {
    const member = await TeamMember.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!member) {
      return res.status(404).json({ message: 'Team member not found' });
    }
    return res.json(member);
  } catch (error) {
    return next(error);
  }
};

export const deleteTeamMember = async (req, res, next) => {
  try {
    const member = await TeamMember.findByIdAndDelete(req.params.id);
    if (!member) {
      return res.status(404).json({ message: 'Team member not found' });
    }
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};
