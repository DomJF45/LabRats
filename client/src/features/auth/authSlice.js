import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

// grab the user from the local storage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  error: false,
  success: false,
  loading: false,
  message: ''
}

// register the user
export const register = createAsyncThunk('auth/register', async(user, thunkAPI) => {
  try {
    return await authService.registerUser(user);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString()); // check if any errors in these fields are present
    return thunkAPI.rejectWithValue(message); // returns the value of message if error present
  }
})

export const login = createAsyncThunk('auth/login', async(user, thunkAPI) => {
  try {
    return await authService.loginUser(user);
  } catch(error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString()); 

    return thunkAPI.rejectWithValue(message);
  }
}) 

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.success = false
      state.error = false
      state.message = ''
    }
  }, // not async, async will go in extra reducers
  extraReducers: (builder) => {
    // because async thunk, need to handle reducers here
    builder
      .addCase(register.pending, (state) => {
        state.loading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false
        state.error = true
        state.message = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = true
        state.message = action.payload
        state.user = null
      })
  }
})

export const { reset } = authSlice.actions // export reset reducer
export default authSlice.reducer