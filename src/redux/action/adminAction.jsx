import { APIService } from "../api/apiService"
import { getProcessDataReducer } from "../slice/adminSlice"

export const getProcessData = ()=>{
    return (dispatch)=>{
        dispatch( getProcessDataReducer({isLoading:true}))
        APIService('DefaultTenant/orchestrator_/odata/Processes',"GET").then((res)=>{
            dispatch(getProcessDataReducer({isLoading:false,payload:res}))

        }).catch((err)=>{
            dispatch(getProcessDataReducer({isLoading:false}))
        })
    }
}