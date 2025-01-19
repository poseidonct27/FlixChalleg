import axios from 'axios';
import { URLAPI } from '../helpers/ApiConnect';

const defaultHeaders = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const instanceAxios = axios.create({
  baseURL: URLAPI,
  defaultHeaders,
});

export const GetAllVideosService = async () => await instanceAxios.get().then((res) => res.data);

export const AddVideoService = async (data) => await instanceAxios.post('', data).then((res) => res.data);

export const UpdateVideoService = async (data) =>
  await instanceAxios.put(`/${data['id']}`, data).then((res) => res.data);

export const RemoveVideoService = async (id) => await instanceAxios.delete(`/${id}`).then((res) => res.data);
