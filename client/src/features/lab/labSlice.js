import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {labService} from './labService'



const initialState = {
  labs: [],
  error: false,
  success: false,
  loading: false,
  message: ''
}

export const registerLab = createAsyncThunk('lab/create', async (lab, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await labService.registerLab(lab, token);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString());
    return thunkAPI.rejectWithValue(message);
  }
})

export const getLab = createAsyncThunk('lab/get', async(_, thunkAPI) => {
  
  try {
    const token = thunkAPI.getState().auth.user.token
    return await labService.getLab(token);
  } catch(error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString());
    return thunkAPI.rejectWithValue(message);
  }
})

export const joinLab = createAsyncThunk('lab/join', async(labData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await labService.joinLab(labData, token);
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
        state.success = true
        state.labs.push(action.payload)
      })
      .addCase(registerLab.rejected, (state, action) => {
        state.error = true
        state.loading = false
        state.message = action.payload
      })
      .addCase(getLab.pending, (state) => {
        state.loading = true
      })
      .addCase(getLab.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.labs = action.payload
      })
      .addCase(getLab.rejected, (state, action) => {
        state.loading = false
        state.error = true
        state.message = action.payload
      })
      .addCase(joinLab.pending, (state) => {
        state.loading = true
      })
      .addCase(joinLab.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.labs.push(action.payload);
      })
      .addCase(joinLab.rejected, (state, action) => {
        state.error = true
        state.loading = false
        state.message = action.payload
      })
      
  }
})

export const { reset } = labSlice.actions;
export default labSlice.reducer;