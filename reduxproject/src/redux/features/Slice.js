import { createSlice } from "@reduxjs/toolkit";
export  const Slice= createSlice({
name:'search',
initialState:{
    query:'',
    activeTab:'photos',
    results:[],
    loading:false,
    error:null

}, 
reducers:{
    setQuery(state,action){
        state.query=action.payload 
    },
    setActiveTabs(state,action){
        state.activeTab=action.payload
    },
    setResults(state,action){
            
state.results=action.payload
state.loading=false
    },
    setLoading(state,action){
state.loading=action.payload
state.error=null

    },
    setError(state,action){
state.error=action.payload
    },
    clearResults(state){
        state.results=[]
    }
}
})
export const {setQuery, setResults, setActiveTabs, setLoading, setError} = Slice.actions
export default Slice.reducer