import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import API from "../../API"
import { resumeSlice } from "./ResumeSlice"


const initialState = {
    subscription_status: false,
    subscription_start_date: null,
    subscription_end_date: null,
    planDetails : null,
    paymentDetails: {}
}

export const getPlanDetails = createAsyncThunk('authentication/get-plan-details', async (data, { rejectWithValue }) => {
    // let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    
    try {
        const response = await axios.get(`https://cv-builder.talentplace.ai/api/v1/zoho/plans`)
        console.log(response,'this is response');
        return response.data
    } catch (error) {
        console.log(error,'this is error');
        return rejectWithValue(error.response.data);
    }
})

export const getPaymentDetails = createAsyncThunk('payment/get-payment-details',async (data,{rejectWithValue}) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    
    try {
        const response = await API.post(`https://cv-builder.talentplace.ai/api/v1/zoho/getUserSubscriptions`, encoded , {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder
        .addCase(getPlanDetails.fulfilled,(state,action) => {
            state.planDetails = action.payload.data.plans
        })
        .addCase(getPaymentDetails.fulfilled,(state,action) => {
            state.paymentDetails = action.payload.data.subscriptions[0]
        })
    }
})

export const getPaymentStatus = (state) => {
    let {status,next_billing_at} = state.paymentDetails.paymentDetails
    console.log(state.paymentDetails.paymentDetails);
    return status === "live";
}
export const getPaidPlanCode = (state) => state.paymentDetails.paymentDetails.plan_code
export default paymentSlice.reducer;