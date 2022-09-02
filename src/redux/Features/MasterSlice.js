import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";

const initialState = {
    loading: false,
    countryCodes: [],
    genderList: [],
    companyList: [],
    jobNatureList:[],
    industryList:[],
    BuisnessScaleList:[],
    skillList:[],
    designationList:[],
    managementLevelList:[],
    functionalArealList:[],
    roleSuggestionList:[],
    companyBasedList:[],
    degreeList:[],
    universityList: [],
    collageList:[],
    currencyList:[],
    status: '',
    error: '',
    sidebarval:1
}
export const getCountryCodeList = createAsyncThunk('authentication/getCountryCodeList', async (data,{ rejectWithValue }) => {
    try {
        const response = await API.get('/getCountryList')
        return response.data
    } catch (error) {
         return rejectWithValue(error.response.data);
    }
})
export const getGenderList = createAsyncThunk('authentication/getGenderList', async (data,{ rejectWithValue }) => {
    try {
        const response = await API.get('/getGenderList')
        return response.data
    } catch (error) {
         return rejectWithValue(error.response.data);
    }
})
export const getJobNatureList = createAsyncThunk('authentication/getJobNatureList', async (auth,{ rejectWithValue }) => {
    try {
        const response = await API.get('/getNatureOfJob',{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control':'no-cache',
                'authorization': `bearer ${auth}`
            }
          })
        return response.data
    } catch (error) {
         return rejectWithValue(error.response.data);
    }
})
export const searchCompany = createAsyncThunk('authentication/searchCompany', async (data,{ rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    try {
        const response =await API.post(`/getCompanyList`,encoded,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control':'no-cache',
                'authorization': `bearer ${data.auth}`
            }
          })
       
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
}
)
export const getIndustryList = createAsyncThunk('authentication/getIndustryList', async (auth,{ rejectWithValue }) => {
    try {
        const response = await API.get('/getIndustryList',{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control':'no-cache',
                'authorization': `bearer ${auth}`
            }
          })
        return response.data
    } catch (error) {
         return rejectWithValue(error.response.data);
    }
})
export const getCompanyBasedList = createAsyncThunk('authentication/get-company-based-list', async (auth,{ rejectWithValue }) => {
    try {
        const response = await API.get('/get-company-based-list',{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control':'no-cache',
                'authorization': `bearer ${auth}`
            }
          })
        return response.data
    } catch (error) {
         return rejectWithValue(error.response.data);
    }
})
export const getBuisnessScaleList = createAsyncThunk('authentication/getBuisnessScaleList', async (auth,{ rejectWithValue }) => {
    try {
        const response = await API.get('/getScaleofBusinessList',{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control':'no-cache',
                'authorization': `bearer ${auth}`
            }
          })
        return response.data
    } catch (error) {
         return rejectWithValue(error.response.data);
    }
})
export const searchSkills = createAsyncThunk('authentication/searchSkills', async (data,{ rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()

    try {
        const response =await API.post(`/search-skill-list`,encoded,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control':'no-cache',
                'authorization': `bearer ${data.auth}`
            }
          })
       
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
}
)
export const searchDesignation = createAsyncThunk('authentication/searchDesignation', async (data,{ rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    try {
        const response =await API.post(`/search-designation`,encoded,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control':'no-cache',
                'authorization': `bearer ${data.auth}`
            }
          })
       
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
}
)
export const getLevelList = createAsyncThunk('authentication/getLevelList', async (auth,{ rejectWithValue }) => {
    try {
        const response =await API.get(`/getLevelList`,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control':'no-cache',
                'authorization': `bearer ${auth}`
            }
          })
       
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
}
)
export const getFunctionalAreaList = createAsyncThunk('authentication/getFunctionalAreaList', async (auth,{ rejectWithValue }) => {
    try {
        const response =await API.get(`/getFunctionalAreaList`,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control':'no-cache',
                'authorization': `bearer ${auth}`
            }
          })
       
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
}
)
export const getRoleSuggestionList = createAsyncThunk('authentication/getRoleSuggestionList', async (data,{ rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    try {
        const response =await API.post(`/search-role-list`,encoded,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control':'no-cache',
                'authorization': `bearer ${data.auth}`
            }
          })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
}
)
export const getDegreeList = createAsyncThunk('authentication/getDegreeList', async (auth,{ rejectWithValue }) => {
    try {
        const response =await API.get(`/get-degree-list`,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control':'no-cache',
                'authorization': `bearer ${auth}`
            }
          })
       
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
}
)
export const getUniversityList = createAsyncThunk('authentication/getUniversityList', async (auth,{ rejectWithValue }) => {
    try {
        const response =await API.get(`/get-university-list`,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control':'no-cache',
                'authorization': `bearer ${auth}`
            }
          })
       
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
}
)
export const getCollageList = createAsyncThunk('authentication/getCollageList', async (auth,{ rejectWithValue }) => {
    try {
        const response =await API.get(`/get-collage-list`,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control':'no-cache',
                'authorization': `bearer ${auth}`
            }
          })
       
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
}
)
export const getCurrencyList = createAsyncThunk('authentication/getCurrencyList', async (auth,{ rejectWithValue }) => {
    try {
        const response =await API.get(`/getCurrencyList`,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control':'no-cache',
                'authorization': `bearer ${auth}`
            }
          })
       
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
}
)
export const setSidebarVal = createAsyncThunk('authentication/sidebarval', async (data,{ rejectWithValue }) => {
    try {
        return data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
}
)
export const masterSlice = createSlice({
    name: 'master',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getCountryCodeList.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
        }).addCase(getCountryCodeList.fulfilled, (state, action) => {
           state.loading=false
            state.status = 'succeeded'
            state.countryCodes = action.payload.data.recordDetails
        }).addCase(getCountryCodeList.rejected, (state, action) => {
           state.loading=false
            state.status = 'Rejected'
            state.error = action.payload.error
        }).addCase(getGenderList.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
        }).addCase(getGenderList.fulfilled, (state, action) => {
           state.loading=false
            state.status = 'succeeded'
            state.genderList = action.payload.data.recordDetails
        }).addCase(getGenderList.rejected, (state, action) => {
           state.loading=false
            state.status = 'Rejected'
            state.error = action.payload.error

        }).addCase(searchCompany.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
        }).addCase(searchCompany.fulfilled, (state, action) => {
           state.loading=false
            state.status = 'succeeded'
            state.companyList = action.payload.data.recordDetails
        }).addCase(searchCompany.rejected, (state, action) => {
           state.loading=false
            state.status = 'Rejected'
            state.error = action.payload.error


        }).addCase(getJobNatureList.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
        }).addCase(getJobNatureList.fulfilled, (state, action) => {
           state.loading=false
            state.status = 'succeeded'
            state.jobNatureList = action.payload.data.recordDetails
        }).addCase(getJobNatureList.rejected, (state, action) => {
           state.loading=false
            state.status = 'Rejected'
            state.error = action.payload.error


        }).addCase(getIndustryList.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
        }).addCase(getIndustryList.fulfilled, (state, action) => {
            state.loading=false
            state.status = 'succeeded'
            state.industryList = action.payload.data.recordDetails
        }).addCase(getIndustryList.rejected, (state, action) => {
           state.loading=false
            state.status = 'Rejected'
            state.error = action.payload.error||'Server Error'

        }).addCase(getCompanyBasedList.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
        }).addCase(getCompanyBasedList.fulfilled, (state, action) => {
           state.loading=false
            state.status = 'succeeded'
            state.companyBasedList = action.payload.data.recordDetails
        }).addCase(getCompanyBasedList.rejected, (state, action) => {
           state.loading=false
            state.status = 'Rejected'
            state.error = action.payload.error

        }).addCase(getBuisnessScaleList.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
        }).addCase(getBuisnessScaleList.fulfilled, (state, action) => {
           state.loading=false
            state.status = 'succeeded'
            state.BuisnessScaleList = action.payload.data.recordDetails
        }).addCase(getBuisnessScaleList.rejected, (state, action) => {
           state.loading=false
            state.status = 'Rejected'
            state.error = action.payload.error

        }).addCase(searchSkills.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
        }).addCase(searchSkills.fulfilled, (state, action) => {
           state.loading=false
            state.status = 'succeeded'
            state.skillList = action.payload.data.recordDetails
        }).addCase(searchSkills.rejected, (state, action) => {
           state.loading=false
            state.status = 'Rejected'
            state.error = action.payload.error

        }).addCase(searchDesignation.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
        }).addCase(searchDesignation.fulfilled, (state, action) => {
           state.loading=false
            state.status = 'succeeded'
            state.designationList = action.payload.data.recordDetails
        }).addCase(searchDesignation.rejected, (state, action) => {
           state.loading=false
            state.status = 'Rejected'
            state.error = action.payload.error

        }).addCase(getLevelList.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
        }).addCase(getLevelList.fulfilled, (state, action) => {
           state.loading=false
            state.status = 'succeeded'
            state.managementLevelList = action.payload.data.recordDetails
        }).addCase(getLevelList.rejected, (state, action) => {
           state.loading=false
            state.status = 'Rejected'
            state.error = action.payload.error

        }).addCase(getFunctionalAreaList.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
        }).addCase(getFunctionalAreaList.fulfilled, (state, action) => {
           state.loading=false
            state.status = 'succeeded'
            state.functionalArealList = action.payload.data.recordDetails
        }).addCase(getFunctionalAreaList.rejected, (state, action) => {
           state.loading=false
            state.status = 'Rejected'
            state.error = action.payload.error

        }).addCase(getRoleSuggestionList.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
        }).addCase(getRoleSuggestionList.fulfilled, (state, action) => {
           state.loading=false
            state.status = 'succeeded'
            state.roleSuggestionList = action.payload.data.recordDetails
        }).addCase(getRoleSuggestionList.rejected, (state, action) => {
           state.loading=false
            state.status = 'Rejected'
            state.error = action.payload.error

        }).addCase(getDegreeList.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
        }).addCase(getDegreeList.fulfilled, (state, action) => {
           state.loading=false
            state.status = 'succeeded'
            state.degreeList = action.payload.data.recordDetails
        }).addCase(getDegreeList.rejected, (state, action) => {
            state.loading=false
            state.status = 'Rejected'
            state.error = action.payload.error

        }).addCase(getUniversityList.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
        }).addCase(getUniversityList.fulfilled, (state, action) => {
           state.loading=false
            state.status = 'succeeded'
            state.universityList = action.payload.data.recordDetails
        }).addCase(getUniversityList.rejected, (state, action) => {
           state.loading=false
            state.status = 'Rejected'
            state.error = action.payload.error

        }).addCase(getCollageList.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
        }).addCase(getCollageList.fulfilled, (state, action) => {
           state.loading=false
            state.status = 'succeeded'
            state.collageList = action.payload.data.recordDetails
        }).addCase(getCollageList.rejected, (state, action) => {
           state.loading=false
            state.status = 'Rejected'
            state.error = action.payload.error

        }).addCase(getCurrencyList.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
        }).addCase(getCurrencyList.fulfilled, (state, action) => {
           state.loading=false
            state.status = 'succeeded'
            state.currencyList = action.payload.data.recordDetails
        }).addCase(getCurrencyList.rejected, (state, action) => {
           state.loading=false
            state.status = 'Rejected'
            state.error = action.payload.error

        })
        .addCase(setSidebarVal.fulfilled, (state, action) => {
            state.loading=false
             state.sidebarval = action
            //  state.error = action.payload.error
 
         })
    }
})


export const selectCountryCodes = (state) => state.masters.countryCodes;
export const selectGenderList = (state) => state.masters.genderList;
export const selectCompanyList = (state) => state.masters.companyList;
export const selectJobNatureList = (state) => state.masters.jobNatureList;
export const selectIndustryList = (state) => state.masters.industryList;
export const selectBuisnessScaleList = (state) => state.masters.BuisnessScaleList;
export const selectSkillList = (state) => state.masters.skillList;
export const selectDesignationList = (state) => state.masters.designationList;
export const selectManagementLevelList = (state) => state.masters.managementLevelList;
export const selectFunctionalAreaList = (state) => state.masters.functionalArealList;
export const selectRoleSuggestionList = (state) => state.masters.roleSuggestionList;
export const selectDegreeList = (state) => state.masters.degreeList;
export const selectUniversityList = (state) => state.masters.universityList;
export const selectCollageList = (state) => state.masters.collageList;
export const selectCompanyBasedList = (state) => state.masters.companyBasedList;
export const selectCurrencylist = (state) => state.masters.currencyList;
export const selectSidebarValue = (state) => state.masters.sidebarval;
export default masterSlice.reducer;