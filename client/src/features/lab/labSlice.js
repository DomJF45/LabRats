import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {labService} from './labService'
import { projectService } from './projectService'
import { taskService } from './taskService'

const initialState = {
  labs: [], // sets labs to an empty array
  lab: {
    projects: []
  }, // used for getting one lab from dashboard
  project: {
    tasks: []
  },
  task: {},
  error: false, // used to signal if there is an error
  success: false, // used to signal if there was a success
  loading: false, // used to signal loading
  message: '' // used for error / success message returned from server
}

export const registerLab = createAsyncThunk('lab/create', async (lab, thunkAPI) => {

  try {
    const token = thunkAPI.getState().auth.user.token; // gets User token from thunkAPI
    return await labService.registerLab(lab, token); // returns data from registerLab in labService.js
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString());
    return thunkAPI.rejectWithValue(message); // captures error message
  }

})

export const getLab = createAsyncThunk('lab/get', async(_, thunkAPI) => {
  
  try {
    const token = thunkAPI.getState().auth.user.token // gets user token
    return await labService.getLab(token); // get single lab from labService.js
  } catch(error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString());
    return thunkAPI.rejectWithValue(message); // captures error message
  }
})

export const getSingleLab = createAsyncThunk('lab/getOne', async(labId, thunkAPI) => {
  try {
    return await labService.getSingleLab(labId); // returns the lab with the clicked lab ID
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString());
    return thunkAPI.rejectWithValue(message); // captures error message
  }
})

export const joinLab = createAsyncThunk('lab/join', async(labData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await labService.joinLab(labData, token); // join lab from labService.js
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString());
    return thunkAPI.rejectWithValue(message); // captures error message
  }
})

export const clearLab = createAsyncThunk('lab/clear', async() => {
  await labService.clearLab();
})

/* 
  ========================== Projects ================================
*/

export const getProjects = createAsyncThunk('projects/getProjects', async(labId, thunkAPI) => {
  try {
    return await projectService.getProjects(labId);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString());
    return thunkAPI.rejectWithValue(message);
  }
})

export const getSingleProject = createAsyncThunk('projects/getSingleProject', async(data, thunkAPI) => {
  try {
    return await projectService.getSingleProject(data);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString());
    return thunkAPI.rejectWithValue(message);
  }
})

export const createProject = createAsyncThunk('projects/createProjects', async(projectData, thunkAPI) => {
  try {
    console.log(`LabID ${projectData.labId} @ createProject Slice`)
    return await projectService.createProject(projectData);

  } catch(error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString());
    return thunkAPI.rejectWithValue(message);
  }
})

export const deleteProject = createAsyncThunk('projects/deleteProject', async(projectData, thunkAPI) => {
  try {
    return await projectService.deleteProject(projectData)
  } catch(error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString());
    return thunkAPI.rejectWithValue(message);
  }
})

/*
 ================= TASKS =============================================
*/

export const getTasks = createAsyncThunk('tasks/getTasks', async(route, thunkAPI) => {
  try {
    return await taskService.getTasks(route);
  } catch(error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString());
    return thunkAPI.rejectWithValue(message);
  }
})

export const addTask = createAsyncThunk('tasks/addTask', async(taskData, thunkAPI) => {
  try {
    return await taskService.addTask(taskData)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString());
    return thunkAPI.rejectWithValue(message);
  }
})

export const editTask = createAsyncThunk('tasks/editTask', async(taskData, thunkAPI) => {
  try {
    console.log(taskData)
    return await taskService.editTask(taskData)
  } catch(error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString());
    return thunkAPI.rejectWithValue(message);
  }
})

export const deleteTask = createAsyncThunk('tasks/deleteTask', async(taskData, thunkAPI)=> {
  try {
    return await taskService.deleteTask(taskData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString());
    return thunkAPI.rejectWithValue(message);
  }
})

// ================ REDUCERS ===================

export const labSlice = createSlice({
  // creates lab slice, name is 'lab', initialState is defined above
  name: 'lab',
  initialState,
  reducers: {
    reset: (state) => {
      state.error = false
      state.success = false
      state.loading = false
      state.message = ''
    }, // allows all states to be set to default values after each dispatch
  },
  extraReducers: (builder) => {
    // defines extra reduces for lab and projects
    // 'extraReducers' is needed when using async functions
    builder
      .addCase(registerLab.pending, (state) => {
        state.loading = true
        // when the function is pending, the laoding state is true
      })
      .addCase(registerLab.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.labs.push(action.payload)
        // when the function is fulfilled, sets loading to false, success to true, and pushes payload into labs[] state
      })
      .addCase(registerLab.rejected, (state, action) => {
        state.error = true
        state.loading = false
        state.message = action.payload
        // when the function is rejected, sets error to true, loading to false, and the message state to the response payload (error)
      })
      .addCase(getLab.pending, (state) => {
        state.loading = true
        // when the function is pending, the laoding state is true
      })
      .addCase(getLab.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.labs = action.payload
        // when the function is fulfilled, set loading and success, returns labs[] with payload
      })
      .addCase(getLab.rejected, (state, action) => {
        state.loading = false
        state.error = true
        state.message = action.payload
        // when the function is rejected, sets error to true, loading to false, and the message state to the response payload (error)
      })
      .addCase(joinLab.pending, (state) => {
        state.loading = true
        // when the function is pending, the laoding state is true
      })
      .addCase(joinLab.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.labs.push(action.payload);
        // when the function is fulfilled, set loading and success, pushes payload into labs[] object
      })
      .addCase(joinLab.rejected, (state, action) => {
        state.error = true
        state.loading = false
        state.message = action.payload
        // when the function is rejected, sets error to true, loading to false, and the message state to the response payload (error)
      })
      .addCase(getSingleLab.pending, (state) => {
        state.loading = true
      })
      .addCase(getSingleLab.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.lab = action.payload
      })
      .addCase(getSingleLab.rejected, (state, action) => {
        state.error = true
        state.loading = false
        state.message = action.payload
        // when the function is rejected, sets error to true, loading to false, and the message state to the response payload (error)
      })
      .addCase(clearLab.fulfilled, (state) => {
        state.lab = null
        state.labs = null
      })
      .addCase(getProjects.pending, (state) => {
        state.loading = true
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.lab.projects = action.payload;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.loading = false
        state.error = true
        state.message = action.payload
      })
      .addCase(getSingleProject.pending, (state) => {
        state.loading = true
      })
      .addCase(getSingleProject.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.project = action.payload
      })
      .addCase(getSingleProject.rejected, (state, action) => {
        state.loading = false
        state.success = false
        state.error = true
        state.message = action.payload
      })
      .addCase(createProject.pending, (state) => {
        state.loading = true
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.lab.projects.push(action.payload)
      })
      .addCase(createProject.rejected, (state, action) => {
        state.loading = false
        state.error = true
        state.message = action.payload
      })
      .addCase(deleteProject.pending, (state) => {
        state.loading = true
      })
      .addCase(deleteProject.fulfilled, (state) => {
        state.loading = false
        state.success = true
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.error = true
        state.loading = false
        state.message = action.payload
      })
      .addCase(getTasks.pending, (state) => {
        state.loading = true
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.project.tasks.push(action.payload);
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.error = true
        state.success = false
        state.loading = false
        state.message = action.payload
      })
      .addCase(addTask.pending, (state) => {
        state.loading = true
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.project.tasks.push(action.payload)
      })
      .addCase(addTask.rejected, (state, action) => {
        state.error = true
        state.loading = false
        state.message = action.payload
      })
      .addCase(editTask.pending, (state) => {
        state.loading = true
      })
      .addCase(editTask.fulfilled, (state) => {
        state.loading = false
        state.success = true
      })
      .addCase(editTask.rejected, (state, action) => {
        state.error = true
        state.success = false
        state.message = action.payload
      })
      .addCase(deleteTask.pending, (state) => {
        state.loading = true
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.success = true
        state.loading = false
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.error = true
        state.success = false
        state.loading = false
        state.message = action.payload
      })
  }
})

export const { reset } = labSlice.actions;
export default labSlice.reducer;