import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";

const initialState = {
    loading: false,
    graph:{},
    companyGraph:{},
    status: '',
    error: '',
}
export const graphDetails = createAsyncThunk('authentication/graphDetails', async (body, { rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries({ user_id: body.user_id })).toString()
    try {
        const response = await API.post(`/industry-skill-mapping`, encoded, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${body.auth}`
            }
        })

        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
export const companyWiseGraph = createAsyncThunk('authentication/companyWiseGraph', async (data, { rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    try {
        const response = await API.post(`/company-wise-salary-chart`, encoded, {
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
export const graphSlice = createSlice({
    name: 'graph',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(graphDetails.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
            state.graph ={}
        }).addCase(graphDetails.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.message = ''
            state.graph = action.payload.data.recordDetails
            state.reload= false
        }).addCase(graphDetails.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.data


        }).addCase(companyWiseGraph.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
            state.companyGraph= {}
        }).addCase(companyWiseGraph.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.message = ''
            state.companyGraph = action.payload.data.recordDetails.salary_management_graph
            state.reload= false
        }).addCase(companyWiseGraph.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.data


        })
    }
})

export const selectOverview = (state) => state.graphs.graph?.industry_overview;
export const selectKeySkills = (state) => state.graphs.graph?.key_skills;
export const selectSalaryGraph = (state) => state.graphs.graph?.salary_management_graph;
export const selectCompanyWise = (state) => state.graphs?.companyGraph;
export const selectCompanyWise_graph_data = (state) => state.graphs.graph?.company_wise_chart_data
export const selectJObSalaryTimeline = (state) => state.graphs.graph.company_wise_chart_data;
export default graphSlice.reducer;