import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    UserList:[],
    selectedUser:{},
    isLoading:false,
    error:''
}

const BASE_URL = 'http://localhost:4000/user'

//GET
export const getUserFromServer = createAsyncThunk(
    "tasks/getUserFromServer",
    async (_,{rejectWithValue}) => {
        const response = await fetch(BASE_URL)
        console.log(response)
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            return rejectWithValue({error:'No Tasks Found'})
        }
    }
)

//POST 
export const addUserToServer = createAsyncThunk(
    "tasks/addUserToServer",
    async (tk,{rejectWithValue}) => {
        const options = {
            method:'POST',
            body: JSON.stringify(tk),
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            }
        }
        const response = await fetch(BASE_URL,options)
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            return rejectWithValue({error:'Task Not Added'})
        }
    }
)

//PATCH 
export const updateUserInServer = createAsyncThunk(
    "tasks/updateUserInServer",
    async (task,{rejectWithValue}) => {
        console.log(task)
        const options = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
            body: JSON.stringify(task),
        }
        const response = await fetch(BASE_URL,options)
        if (response.ok) {
            const jsonResponse = await response.json()
            // initialState.selectedUser =jsonResponse
            localStorage.setItem("token", jsonResponse.username)
            window.location.href ="/"
            return jsonResponse
        } else {
            return rejectWithValue({error:'Task Not Updated'})
        }
    }
)





const userSlice = createSlice({
    name:'tasksSlice',
    initialState,
    reducers: {
        
        removeTaskFromList:(state,action) => {
            state.UserList = state.UserList.filter((task) => task._id !== action.payload._id)
        },
        
        setSelectedTask:(state,action) => {
            state.selectedTask = action.payload
        }

    },
    extraReducers:(builder) => {
        builder
            .addCase(getUserFromServer.pending,(state) => {
                state.isLoading = true
            })
            .addCase(getUserFromServer.fulfilled,(state,action) => {
                state.isLoading = false
                state.error = ''
                state.UserList = action.payload
            })
            .addCase(getUserFromServer.rejected,(state,action) => {
                state.error = action.payload.error
                state.isLoading = false
                state.UserList = []
            })
            .addCase(addUserToServer.pending,(state) => {
                state.isLoading = true
            })
            .addCase(addUserToServer.fulfilled,(state,action) => {
                state.isLoading = false
                state.error = ''
                state.UserList.push(action.payload)
            })
            .addCase(addUserToServer.rejected,(state,action) => {
                state.error = action.payload.error
                state.isLoading = false
            })
            .addCase(updateUserInServer.pending,(state) => {
                state.isLoading = true
            })
            .addCase(updateUserInServer.fulfilled,(state,action) => {
                state.isLoading = false
                state.error = ''
                state.UserList = action.payload 
            })
            .addCase(updateUserInServer.rejected,(state,action) => {
                state.error = action.payload
                state.isLoading = false
            })
           
    }

})

export const {addTaskToList,removeTaskFromList,updateTaskInList,setSelectedTask} = userSlice.actions

export default userSlice.reducer