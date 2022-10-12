import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"
import API from "../../API"
import { resumeSlice } from "./ResumeSlice"


const initialState = {
    subscription_status: false,
    subscription_start_date: null,
    subscription_end_date: null,
    planDetails : null,
    paymentDetails: {},
    isPaymentIniated: false
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

export const createSubscription = createAsyncThunk('payment/create-subscription',async (data,{rejectWithValue}) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    
    try {
        const response = await API.post(`https://cv-builder.talentplace.ai/api/v1/zoho/hostedpages/newsubscription`, data.body , {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        console.log(response.data,'this is data');
        return response.data
    } catch (error) {
        console.log(error,'this is err');
        return rejectWithValue(error.response.data);
    }
})

export const createCustomPlan = createAsyncThunk('payment/create-custom-plan',async (data,{rejectWithValue}) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    
    try {
        const response = await API.post(`https://cv-builder.talentplace.ai/api/v1/zoho/custom-plan
        `, data.body , {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        console.log(response.data,'this is data');
        return response.data
    } catch (error) {
        console.log(error,'this is err');
        return rejectWithValue(error.response.data);
    }
})

export const cancelSubscription = createAsyncThunk('payment/cancel-subscription',async (data,{rejectWithValue}) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    
    try {
        const response = await API.post(`https://cv-builder.talentplace.ai/api/v1/zoho/cancelUserSubscription`, data.body , {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        console.log(response.data,'this is data');
        return response.data
    } catch (error) {
        console.log(error,'this is err');
        return rejectWithValue(error.response.data);
    }
})

export const updateSubscription = createAsyncThunk('payment/update-subscription',async (data,{rejectWithValue}) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    
    try {
        const response = await API.post(`https://cv-builder.talentplace.ai/api/v1/zoho/hostedpages/updatesubscription`, data.body , {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        return response.data
    } catch (error) {
        console.log(error,'this is err');
        return rejectWithValue(error.response.data);
    }
})

export const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers:{
        changePaymentInitiated : (state,action) => {
            state.isPaymentIniated = action.payload
        }
    },
    extraReducers(builder){
        builder
        .addCase(getPlanDetails.fulfilled,(state,action) => {
            state.planDetails = action.payload.data.plans
        })
        .addCase(getPaymentDetails.fulfilled,(state,action) => {
            state.paymentDetails = action.payload.data.subscriptions[0]
        })
        .addCase(createSubscription.fulfilled,(state,action) => {
            // state.planDetails = action.payload.data.
            state.planDetails = action.payload.data.hostedpage.url;
        })
        .addCase(cancelSubscription.fulfilled,(state,action) => {
            state.planDetails = action.payload.data.plans
        })
        .addCase(updateSubscription.fulfilled,(state,action) => {
            state.planDetails = action.payload.data.plans
        })
        .addCase(createCustomPlan.fulfilled,(state,action) => {
            state.paymentDetails = action.payload.data
            toast.success("Enrolled successfully!")
        })
    }
})

export const getPaymentStatus = (state) => {
    let {status,next_billing_at} = state.paymentDetails.paymentDetails
    console.log(state.paymentDetails.paymentDetails);
    return status === "live";
}

export const {changePaymentInitiated} = paymentSlice.actions;

export const getPaymentInitiated = (state) => state.paymentDetails.isPaymentIniated
export const getPaidPlanCode = (state) => state.paymentDetails?.paymentDetails?.plan_code
export const selectPlanDetails = (state) => state.paymentDetails.planDetails
export const selectSubscriptionDetails = (state) => state.paymentDetails?.paymentDetails
export default paymentSlice.reducer;