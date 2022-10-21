import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {labService} from './labService'

const lab = JSON.parse(localStorage.getItem('lab'));

const initialState = {
  lab: lab ? lab : null,
  error: false,
  success: false,
  loading: false,
  message: ''
}

export const registerLab = createAsyncThunk('lab/create', async (lab, thunkAPI) => {
  try {
    return await labService.registerLab(lab);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString());
    return thunkAPI.rejectWithValue(message);
  }
})

export const labSlice = createSlice({
  name: 'lab',
  initialState,
  reducers: {
    reset: (state) => {
      state.error = false
      state.success = false
      state.loading = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerLab.pending, (state) => {
        state.loading = true
      })
      .addCase(registerLab.fulfilled, (state, action) => {
        state.loading = false
        state.error = false
        state.lab = action.payload
      })
      .addCase(registerLab.rejected, (state, action) => {
        state.error = true
        state.loading = false
        state.message = action.payload
        state.lab = null
      })
  }
})

export const { reset } = labSlice.actions;
export default labSlice.reducer;