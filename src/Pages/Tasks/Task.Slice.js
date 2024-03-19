import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[]
}
const TaskSlice = createSlice({
    name:"Task",
    initialState,
    reducers: {
        createTask: (state,action)=>{
            state.data.push(action.payload)
            //console.log("Inside reducer",state.data);
        }
    }
})

export const  {createTask} = TaskSlice.actions
export default TaskSlice.reducer