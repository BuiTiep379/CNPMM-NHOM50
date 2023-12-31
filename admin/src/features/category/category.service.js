import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from '../../api/axios-client';

const createAPI = createAsyncThunk(
  '/category/create',
  async (categoryData, thunkAPI) => {
    try {
      const response = await axiosClient.post(
        '/category/create',
        JSON.stringify({ data: categoryData })
      );
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
const uploadAPI = createAsyncThunk(
  '/category/upload-image',
  async (picture, thunkAPI) => {
    try {
      const response = await axiosClient.post(
        '/category/upload-image',
        JSON.stringify({ data: picture })
      );
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
const getAllAPI = createAsyncThunk('/category/get-all', async (thunkAPI) => {
  try {
    const response = await axiosClient.get('/category');
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const deleteCategoryAPI = createAsyncThunk(
  '/category/delete',
  async (listID, thunkAPI) => {
    try {
      const response = await axiosClient.post(
        `/category/delete`,
        JSON.stringify({ data: listID })
      );
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const categoryThunk = {
  createAPI,
  getAllAPI,
  deleteCategoryAPI,
  uploadAPI,
};
export default categoryThunk;
