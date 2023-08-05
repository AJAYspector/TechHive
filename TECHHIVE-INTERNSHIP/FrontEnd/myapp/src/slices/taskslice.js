import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    tasksList:[],
    selectedTaskList:{},
    isloading:false,
    error:''
}
const base ='http://localhost:4000/api'

export const getTasksFromServer = createAsyncThunk(
    "tasks/getTasksFromserver",
    async (_,{rejectWithValue}) => {
        const response = await fetch(base)
        if (response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            return rejectWithValue({error:"no tassk found"})
        }
    }
)

const taskslice = createSlice({
name:'taskslice',
initialState,
reducers:{
    // addtasks:(state,action) => {
    //     const id = math.random() * 100;
    //     let task = {...action.payload,id}
    //     state.tasksList.push(task)
    // },
    removetask:(state,action) => {
        state.tasksList = state.tasksList.filter((task) => task._id !== action.payload._id)
    },
    // updatetask:(state,action) => {
    //     state.tasksList = state.tasksList.map((task) => task._id === action.payload._id ? action.payload: task)
    // },
    setselectedtask:(state,action) => {
        state.selectedTaskList = action.payload
    }
},extraReducers:(builder) => {
    builder
        .addCase(getTasksFromServer.pending,(state) => {
            state.isloading = true
        })
        .addCase(getTasksFromServer.fulfilled,(state,action) => {
            state.isloading = false
            state.error = ''
            state.tasksList = action.payload
        })
        .addCase(getTasksFromServer.rejected,(state,action) => {
            state.isloading = false
            state.tasksList = []
        })
        .addCase(addtasktoserver.pending,(state) => {
            state.isloading = true
        })
        .addCase(addtasktoserver.fulfilled,(state,action) => {
            state.isloading = false
            state.error = ''
            state.tasksList.push(action.payload)
        })
        .addCase(addtasktoserver.rejected,(state) => {
            state.isloading = false
        })
        .addCase(updatetaskserver.pending,(state) => {
            state.isloading = true
        })
        .addCase(updatetaskserver.fulfilled,(state,action) => {
            state.isloading = false
            state.error = ''
            state.tasksList = state.tasksList.map((task) => task._id === action.payload._id ? action.payload: task)
        })
        .addCase(updatetaskserver.rejected,(state) => {
            state.isloading = false
        })
        .addCase(deltasktoserver.pending,(state) => {
            state.isloading = true
        })
        .addCase(deltasktoserver.fulfilled,(state,action) => {
            state.isloading = false
            state.error = ''
        })
        .addCase(deltasktoserver.rejected,(state) => {
            state.isloading = false
        })
}
})
 // Import your modal reducer




export const addtasktoserver = createAsyncThunk(
    "tasks/addtasktoserver",
    async (task,{rejectWithValue}) => {
        const options = {
            method:'POST',
            body: JSON.stringify(task),
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            }
        }
        const response = await fetch(base,options)
        if (response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            return rejectWithValue({error:"Task not added"})
        }
    }
)
export const updatetaskserver = createAsyncThunk(
    "tasks/updatetaskserver ",
    async (task,{rejectWithValue}) => {
        const options = {
            method:'PATCH',
            body: JSON.stringify(task),
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            }
        }
        const response = await fetch(base +'/' +task._id,options)
        if (response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            return rejectWithValue({error:"Task not updated"})
        }
    }
)
export const deltasktoserver = createAsyncThunk(
    "tasks/deltasktoserver",
    async (task,{rejectWithValue}) => {
        const options = {
            method:'DELETE',
        }
        const response = await fetch(base +'/' +task._id,options)
        if (response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            return rejectWithValue({error:"Task not added"})
        }
    }
)


export const{addtasks,removetask,updatetask,setselectedtask} = taskslice.actions
export default taskslice.reducer