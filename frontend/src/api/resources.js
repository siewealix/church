import api from './client';

export const login = async (payload) => {
  const { data } = await api.post('/api/auth/login', payload);
  return data;
};

export const fetchEvents = async (params) => {
  const { data } = await api.get('/api/events', { params });
  return data;
};

export const fetchEvent = async (id) => {
  const { data } = await api.get(`/api/events/${id}`);
  return data;
};

export const fetchSermons = async (params) => {
  const { data } = await api.get('/api/sermons', { params });
  return data;
};

export const fetchSermon = async (id) => {
  const { data } = await api.get(`/api/sermons/${id}`);
  return data;
};

export const fetchPosts = async (params) => {
  const { data } = await api.get('/api/posts', { params });
  return data;
};

export const fetchPost = async (id) => {
  const { data } = await api.get(`/api/posts/${id}`);
  return data;
};

export const fetchMinistries = async (params) => {
  const { data } = await api.get('/api/ministries', { params });
  return data;
};

export const fetchTeam = async (params) => {
  const { data } = await api.get('/api/team', { params });
  return data;
};

export const fetchGallery = async (params) => {
  const { data } = await api.get('/api/gallery', { params });
  return data;
};

export const submitContact = async (payload) => {
  const { data } = await api.post('/api/contact', payload);
  return data;
};

export const createResource = async (resource, payload) => {
  const { data } = await api.post(`/api/${resource}`, payload);
  return data;
};

export const updateResource = async (resource, id, payload) => {
  const { data } = await api.put(`/api/${resource}/${id}`, payload);
  return data;
};

export const deleteResource = async (resource, id) => {
  await api.delete(`/api/${resource}/${id}`);
};

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const { data } = await api.post('/api/uploads', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return data;
};
