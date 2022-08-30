import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";

const initialState = {
    loading: false,
    recordDetails: {},
    company_job_record_id: '',
    status: '',
    reload: true,
    error: '',
    message: '',
    form: null,
    newJob: false,
    newDesignation:false,
    newRoles: false,
    newEducation:false,
    newCertificate:false,
    newAdditionalSkill:false,
    newPhotoMedia:false,
    newProject:false,
    toEdit: false,
    editPageDetails : {},
    pageOn:'/personal-information',
    newJob: false,
    newDesignation:false,
    newEducation:false,
    newCertificate:false,
    newAdditionalSkill:false,
    newPhotoMedia:false,
    newProject:false,
    downLoadDetails: {}
}
export const resumeInfo = createAsyncThunk('authentication/resumeInfo', async (body, { rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries({ user_id: body.user_id })).toString()
    try {
        const response = await API.post(`/user-info`, encoded, {
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

export const profileInfo = createAsyncThunk('authentication/profileInfo', async (body, { rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries({ user_id: body.user_id })).toString()
    try {
        const response = await API.post(`/social-share-user-info`, encoded, {
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

export const addExperience = createAsyncThunk('authentication/addExperience', async (data, { rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/add-experience`, encoded, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        if(data.dispatch){
            data.dispatch(reload())
            data.dispatch(changeEditPageDetails({progress: null})).unwrap();
        }
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
export const addCompany = createAsyncThunk('authentication/addCompany', async (data, { rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/add-company-info`, encoded, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        if(data.dispatch){
            data.dispatch(reload())
            data.dispatch(changeEditPageDetails({progress: null})).unwrap();
        }
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
export const addIndustryInfo = createAsyncThunk('authentication/addIndustryInfo', async (data, { rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/add-company-industry-info`, encoded, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        if(data.dispatch){
            data.dispatch(reload())
            data.dispatch(changeEditPageDetails({progress: null})).unwrap();
        }
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
export const addJobDesignation = createAsyncThunk('authentication/addJobDesignation', async (data, { rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded, data.body)
    try {
        const response = await API.post(`/job-designation`, encoded, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        if(data.dispatch){
            data.dispatch(reload())
            data.dispatch(changeEditPageDetails({progress: null})).unwrap();
        }
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
export const addJobSalary = createAsyncThunk('authentication/addJobSalary', async (data, { rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded, data.body)
    try {
        const response = await API.post(`/job-salary-info`, encoded, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        if(data.dispatch){
            data.dispatch(reload())
            data.dispatch(changeEditPageDetails({progress: null})).unwrap();
        }
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
export const addJobSkills = createAsyncThunk('authentication/addJobSkills', async (data, { rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/add-job-skills`, encoded, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        if(data.dispatch){
            data.dispatch(reload())
            data.dispatch(changeEditPageDetails({progress: null})).unwrap();
        }
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
export const addProject = createAsyncThunk('authentication/addProject', async (data, { rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/add-project-info`, encoded, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        if(data.dispatch){
            data.dispatch(reload())
            data.dispatch(changeEditPageDetails({progress: null})).unwrap();
        }
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
export const addEducation = createAsyncThunk('authentication/addEducation', async (data, { rejectWithValue }) => {

    try {
        const response = await API.post(`/add-education-info`, data.body, {
            headers: {
                "Content-Type": "multipart/form-data",
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        if(data.dispatch){
            data.dispatch(reload())
            data.dispatch(changeEditPageDetails({progress: null})).unwrap();
        }
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
export const addCertification = createAsyncThunk('authentication/addCertification', async (data, { rejectWithValue }) => {

    try {
        const response = await API.post(`/add-certificate-info`, data.body, {
            headers: {
                "Content-Type": "multipart/form-data",
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        if(data.dispatch){
            data.dispatch(reload())
            data.dispatch(changeEditPageDetails({progress: null})).unwrap();
        }
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
export const addAdditionalSkills = createAsyncThunk('authentication/addAdditionalSkills', async (data, { rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/add-additional-info`, encoded, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        if(data.dispatch){
            data.dispatch(reload())
            data.dispatch(changeEditPageDetails({progress: null})).unwrap();
        }
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
export const addHobbies = createAsyncThunk('authentication/add-hobbies', async (data, { rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/add-hobbies`, encoded, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        if(data.dispatch){
            data.dispatch(reload())
            data.dispatch(changeEditPageDetails({progress: null})).unwrap();
        }
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
export const addBio = createAsyncThunk('authentication/addBio', async (data, { rejectWithValue }) => {

    try {
        const response = await API.post(`/add-your-bio`, data.body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        if(data.dispatch){
            data.dispatch(reload())
            data.dispatch(changeEditPageDetails({progress: null})).unwrap();
        }
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
export const uploadPhotomedia = createAsyncThunk('authentication/uploadPhotomedia', async (data, { rejectWithValue }) => {

    try {
        const response = await API.post(`/upload-photo-media`, data.body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        if(data.dispatch){
            data.dispatch(reload())
            data.dispatch(changeEditPageDetails({progress: null})).unwrap();
        }
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
export const uploadCVvideos = createAsyncThunk('authentication/uploadCVvideos', async (data, { rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/upload-cv-video`, encoded, {
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

export const uploadResume = createAsyncThunk('authentication/uploadedResumeurl', async (data, { rejectWithValue }) => {
    console.log("bodyyyyyyyyyyyy",data.body)
    // let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    try {
        const response = await API.post(`/upload-resume-pdf`, data.body , {
            headers: {
                "Content-Type": `multipart/form-data`,
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        sessionStorage.setItem("resume_link",response.data.data.resume_pdf)
        return {resumePdfUrl: response.data.data.resume_pdf,app:data.app}
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.data);
    }
})
export const addSocialLinks = createAsyncThunk('authentication/addSocialLinks', async (data, { rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/add-social-links`, encoded, {
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
export const changeFormId = createAsyncThunk('authentication/changeFormId', async (data, { rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/update-form-id`, encoded, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        if(data.navigate){
            data.navigate('/cv-builder')
        }
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
export const changeToEdit = createAsyncThunk('authentication/changeToEdit', async (data, { rejectWithValue }) => {
    if(data){
        return data;
    }else{
        return rejectWithValue(data);
    }
})

export const changeEditPageDetails = createAsyncThunk('authentication/changeEditPageDetails', async (data, { rejectWithValue }) => {
    if(data){
        return data;
    }else{
        return rejectWithValue(data);
    }
})

export const addCognitiveSkills = createAsyncThunk('authentication/addCognitiveSkills', async (data, { rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/manage-cognitive-info`, encoded, {
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

export const updateProfileInfo = createAsyncThunk('authentication/updateProfileInfo', async (data, { rejectWithValue }) => {
    console.log(data);
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/update-profile`, data.body, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        data.dispatch(reload())
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const sendVerificationCode = createAsyncThunk('authentication/send-verification-otp', async (data, { rejectWithValue }) => {
    console.log(data);
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/send-verification-otp`, encoded , {
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

export const deleteCompany = createAsyncThunk('authentication/delete-company', async (data, { rejectWithValue }) => {
    console.log(data);
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/delete-company-info`, encoded , {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        data.dispatch(reload());
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const deleteProject = createAsyncThunk('authentication/delete-project', async (data, { rejectWithValue }) => {
    console.log(data);
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/delete-project-info`, encoded , {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        data.dispatch(reload());
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const deleteJobRole = createAsyncThunk('authentication/delete-job-role', async (data, { rejectWithValue }) => {
    console.log(data);
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/delete-job-role-info`, encoded , {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        data.dispatch(reload());
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const deleteEducation = createAsyncThunk('authentication/delete-education-info', async (data, { rejectWithValue }) => {
    console.log(data);
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/delete-education-info`, encoded , {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        data.dispatch(reload());
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const deleteCertificate = createAsyncThunk('authentication/delete-certificate-info', async (data, { rejectWithValue }) => {
    console.log(data);
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/delete-certificate-info`, encoded , {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        data.dispatch(reload());
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const deleteAdditionalSkill = createAsyncThunk('authentication/delete-additional-skill-info', async (data, { rejectWithValue }) => {
    console.log(data);
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/delete-additional-skill-info`, encoded , {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        data.dispatch(reload());
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const verifyOTP = createAsyncThunk('authentication/verify-email-mobile-otp', async (data, { rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/verify-email-mobile-otp`, encoded , {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        if(data.body.mode === "email"){
            localStorage.removeItem("email")
        }else{
            localStorage.removeItem("mobile")
        }
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const verifyPayment = createAsyncThunk('authentication/verify-razorpay-payment', async (data, { rejectWithValue }) => {
    let encoded = new URLSearchParams(Object.entries(data.body)).toString()
    console.log(encoded)
    try {
        const response = await API.post(`/verify-razorpay-payment`, encoded , {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'authorization': `bearer ${data.auth}`
            }
        })
        data.dispatch(reload())
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const changePageOn = createAsyncThunk('authentication/changePageOn', async (data, { rejectWithValue }) => {
    if(data){
        return data;
    }else{
        return rejectWithValue(data);
    }
})

export const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        toggleNewJob: (state)=>{
            state.newJob = !state.newJob
        },
        toggleNewDesignation: (state)=>{
            state.newDesignation = !state.newDesignation
        },
        setResumeError: (state,action) => {
            state.error = true
            state.message = action.payload
        },
        resetError : (state,action) => {
            state.error = false
            state.message = null
        },
        toggleNewRoles : (state) => {
            state.newRoles = !state.newRoles;
        },
        toggleNewEducation: (state,action)=>{
            state.newEducation = action.payload
        },
        toggleNewCertificate: (state,action)=>{
            state.newCertificate = action.payload
        },
        toggleNewAdditionalSkills: (state,action)=>{
            state.newAdditionalSkill = action.payload
        },
        toggleNewPhotoMedia: (state,action)=>{
            state.newPhotoMedia = action.payload
        },
        toggleNewProject:(state,action)=>{
            state.newProject = action.payload
        },
        nextForm: (state) => {
            if (state.form < 18) state.form += 1;
        },
        prevForm: (state) => {
            if (state.form > 1) state.form -= 1;

        },
        setForm: (state, action) => {
            state.form = action.payload.id;

        },
        reload: (state) => {
            state.reload = true
        },
        resetResume : (state) => {
            state.loading = false;
            state.recordDetails = {};
            state.company_job_record_id = '';
            state.status = '';
            state.reload = true;
            state.error = '';
            state.message = '';
            state.form = null;
            state.newJob = false;
            state.newDesignation =false;
            state.newEducation =false;
            state.newCertificate =false;
            state.newAdditionalSkill =false;
            state.newPhotoMedia =false;
            state.newProject =false;
            state.toEdit = false;
            state.editPageDetails  = {};
            state.pageOn ='/personal-information';
            state.newJob = false;
            state.newDesignation =false;
            state.newEducation =false;
            state.newCertificate =false;
            state.newAdditionalSkill =false;
            state.newPhotoMedia =false;
            state.newProject =false;
            state.downLoadDetails = {};
        }
    },
    extraReducers(builder) {
        builder.addCase(resumeInfo.pending, (state, action) => {
            state.status = 'loading'
        }).addCase(resumeInfo.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.recordDetails = action.payload.data.recordDetails
            state.form = action.payload.data.recordDetails.form
            state.reload = false
        }).addCase(resumeInfo.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.data.error_message

        }).addCase(profileInfo.pending, (state, action) => {
            state.status = 'loading'
        }).addCase(profileInfo.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.recordDetails = action.payload.data.recordDetails
            state.form = action.payload.data.recordDetails.form
            state.reload = false
        }).addCase(profileInfo.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.data.error_message

        }).addCase(addExperience.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
            state.message = ''
        }).addCase(addExperience.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.message = action.payload.data.message
            state.reload = true
        }).addCase(addExperience.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.data.error_message
        }).addCase(addCompany.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
            state.message = ''
        }).addCase(addCompany.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.message = action.payload.data.message
            state.reload = true
            state.newJob= false
        }).addCase(addCompany.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.data.error_message
        }).addCase(addIndustryInfo.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
            state.message = ''
        }).addCase(addIndustryInfo.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.message = action.payload.data.message
            state.reload = true
        }).addCase(addIndustryInfo.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.data.error_message

        }).addCase(addJobDesignation.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
        }).addCase(addJobDesignation.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.message = action.payload.data.message
            state.reload = true
            state.newDesignation= false
        }).addCase(addJobDesignation.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.data.error_message

        }).addCase(addJobSalary.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
        }).addCase(addJobSalary.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.message = action.payload.data.message
            state.reload = true
        }).addCase(addJobSalary.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            //  state.error = action.payload.error
            // state.message = action.payload.data


        }).addCase(addJobSkills.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
        }).addCase(addJobSkills.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.message = action.payload.data.message
            state.newRoles = false;
            state.reload = true
        }).addCase(addJobSkills.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.data.error_message

        }).addCase(addProject.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
        }).addCase(addProject.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.newProject = false;
            state.message = action.payload.data.message
        }).addCase(addProject.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.data.error_message

        }).addCase(addEducation.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false

        }).addCase(addEducation.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.message = action.payload.data.message
        }).addCase(addEducation.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.data.error_message

        }).addCase(addCertification.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
        }).addCase(addCertification.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.message = action.payload.data.message
        }).addCase(addCertification.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.data.error_message


        }).addCase(addAdditionalSkills.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
        }).addCase(addAdditionalSkills.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.message = action.payload.data.message
        }).addCase(addAdditionalSkills.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.data.error_message


        }).addCase(addHobbies.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
        }).addCase(addHobbies.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.message =action.payload.data.message
            state.reload = true
        }).addCase(addHobbies.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.message


        }).addCase(addBio.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
        }).addCase(addBio.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.message = action.payload.data.message
            state.reload = true
        }).addCase(addBio.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.data.error_message


        }).addCase(uploadPhotomedia.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
        }).addCase(uploadPhotomedia.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.message = action.payload.data.message
        }).addCase(uploadPhotomedia.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.data.error_message


        }).addCase(uploadCVvideos.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
        }).addCase(uploadCVvideos.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.message = action.payload.data.message
            state.reload = true
        }).addCase(uploadCVvideos.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.message


        }).addCase(addSocialLinks.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
        }).addCase(addSocialLinks.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.message = action.payload.data.message
            state.reload = true
        }).addCase(addSocialLinks.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.message


        }).addCase(changeFormId.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
        }).addCase(changeFormId.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.message = action.payload.data.message
            state.reload = true
        }).addCase(changeFormId.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.message
        }).addCase(changeToEdit.fulfilled, (state, action) => {
            state.loading = false
            state.toEdit = action.payload
        }).addCase(changeToEdit.rejected, (state, action) => {
            state.loading = false
            state.toEdit = action.payload
        }).addCase(changeEditPageDetails.fulfilled, (state, action) => {
            state.loading = false
            state.editPageDetails = action.payload
        })
        .addCase(changeEditPageDetails.rejected, (state, action) => {
            state.loading = false
            state.editPageDetails = action.payload
        }).addCase(addCognitiveSkills.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
        }).addCase(addCognitiveSkills.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.message = 'Cognitive Skills'
        }).addCase(addCognitiveSkills.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.data
        })
        .addCase(changePageOn.fulfilled, (state, action) => {
            state.loading = false
            state.pageOn = action.payload
        })
        .addCase(changePageOn.rejected, (state, action) => {
            state.loading = false
            state.pageOn = '/personal-information'
        })
        .addCase(uploadResume.pending,(state,action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
            state.downLoadDetails = action.payload
        })
        .addCase(uploadResume.fulfilled,(state,action) => {
            state.loading = false
            state.status = 'succeeded'
            state.downLoadDetails = action.payload
        })
        .addCase(uploadResume.rejected,(state,action) => {
            state.loading = false
            state.downLoadDetails = {};
        })
        .addCase(deleteAdditionalSkill.fulfilled, (state, action) => {
            state.message = "Deleted successfully!";
            state.loading = false;
            state.error = false;
        })
        .addCase(deleteAdditionalSkill.pending, (state,action) => {
            state.loading = true;
        })
        .addCase(deleteAdditionalSkill.rejected, (state,action) => {
            state.loading = false;
            state.error = true;
            state.message = "Something went wrong in deletion! Try again"
        })
        .addCase(updateProfileInfo.pending,(state,acton) => {
            state.loading = true;
            state.profileInfo = {};
            state.message = null 
        })
        .addCase(updateProfileInfo.fulfilled, (state,action) => {
            state.loading = false;
            state.profileInfo = action.payload.data;
            state.message = action.payload.data.message
        })
        .addCase(updateProfileInfo.rejected, (state,action) => {
            state.loading = false;
            state.profileInfo = {};
            state.message = "Something went wrong in updatio! Try again"
        })
        .addCase(sendVerificationCode.rejected,(state,action) => {
            state.loading = false
            state.message = action.payload.data.message
            state.error = true
        })
        .addCase(verifyOTP.rejected,(state,action) => {
            state.loading = false
            state.message = action.payload.data.message
            state.error = true
        })
        .addCase(sendVerificationCode.fulfilled,(state,action) => {
            state.loading = false
            state.message = action.payload.data.message
            state.error = false
        })
        .addCase(verifyOTP.fulfilled,(state,action) => {
            state.loading = false
            state.message = action.payload.data.message
            state.error = false
        })
        .addCase(deleteCompany.pending,(state,action) => {
            state.loading = true
        })
        .addCase(deleteCompany.fulfilled,(state,action) => {
            state.loading = false
            state.message = action.payload.data.message
        })
        .addCase(deleteCompany.rejected,(state,action) => {
            state.loading = false
            state.message = action.payload.data.message
            state.error = true;
        })
        .addCase(deleteProject.pending,(state,action) => {
            state.loading = true
        })
        .addCase(deleteProject.fulfilled,(state,action) => {
            state.loading = false
            state.message = action.payload.data.message
        })
        .addCase(deleteProject.rejected,(state,action) => {
            state.loading = false
            state.message = action.payload.data.message
            state.error = true;
        })
        .addCase(deleteJobRole.pending,(state,action) => {
            state.loading = true
        })
        .addCase(deleteJobRole.fulfilled,(state,action) => {
            state.loading = false
            state.message = action.payload.data.message
        })
        .addCase(deleteJobRole.rejected,(state,action) => {
            state.loading = false
            state.message = action.payload.data.message
            state.error = true;
        })
        .addCase(deleteEducation.pending,(state,action) => {
            state.loading = true
        })
        .addCase(deleteEducation.fulfilled,(state,action) => {
            state.loading = false
            state.message = action.payload.data.message
        })
        .addCase(deleteEducation.rejected,(state,action) => {
            state.loading = false
            state.message = action.payload.data.message
            state.error = true;
        })
        .addCase(deleteCertificate.pending,(state,action) => {
            state.loading = true
        })
        .addCase(deleteCertificate.fulfilled,(state,action) => {
            state.loading = false
            state.message = action.payload.data.message
        })
        .addCase(deleteCertificate.rejected,(state,action) => {
            state.loading = false
            state.message = action.payload.data.message
            state.error = true;
        })
        
    }

})


export const selectResumeDetails = (state) => state.resume.recordDetails;
export const selectJobStartDate = (state) => {
    let data = state.resume.recordDetails.resumeInfo || {}
    let resume = data.resumeInfo || {}
    if (resume.is_fresher === 1) {
        return false
    } else {
        return resume.job_start_date
    }
}
export const selectUserFirstName = (state) => state.resume.recordDetails.fname
export const selectResumeInfo = (state) => state.resume.recordDetails.resume_info;
export const selectResumeStatus = (state) => state.resume.status;
export const selectResumeMessage = (state) => state.resume.message;
export const selectResumeError = (state) => state.resume.error;
export const selectResumeLoading = (state) => state.resume.loading;
export const selectFormId = (state) => state.resume.form;
export const SelectCompanyJobRecordId = (state) => state.resume.company_job_record_id
export const SelectCompanyDetails = (state) => {
    let recordDetails = state.resume.recordDetails || {}
    let resumeInfo = recordDetails.resume_info || {}
    return resumeInfo.company
}
export const selectFirstCompany = (state) => {
    let recordDetails = state.resume.recordDetails || {}
    let resumeInfo = recordDetails.resume_info || {}
    let company = resumeInfo.company || {}
    return (company && company[0]) || {}
}
export const selectFirstJob = (state) => {
    let recordDetails = state.resume.recordDetails || {}
    let resumeInfo = recordDetails.resume_info || {}
    let companys = resumeInfo.company || []
    let firstCompany = companys[0]||{}
    let jobs = firstCompany.job_role || []
    
    return (jobs && jobs[0]) || false
}
export const selectLastJob = (state) => {
    let recordDetails = state.resume.recordDetails || {}
    let resumeInfo = recordDetails.resume_info || {}
    let companys = resumeInfo.company || []
    let lastCompany =(companys&&companys[companys.length-1])||{}
    let jobs = lastCompany.job_role || []
    
    return (jobs && jobs[jobs.length-1]) || false
}
export const selectLastCompany = (state) => {
    let recordDetails = state.resume.recordDetails || {}
    let resumeInfo = recordDetails.resume_info || {}
    let company = resumeInfo.company || {}
    return (company && company[company.length - 1]) || false
}
export const selectEducation = (state) => {
    let recordDetails = state.resume.recordDetails || {}
    let resumeInfo = recordDetails.resume_info || {}
    return resumeInfo.education || false;
}
export const selectCertificate = (state) => {
    let recordDetails = state.resume.recordDetails || {}
    let resumeInfo = recordDetails.resume_info || {}
    return resumeInfo.certificate || false;
}
export const selectAdditionalSkills = (state) => {
    let recordDetails = state.resume.recordDetails || {}
    let resumeInfo = recordDetails.resume_info || {}
    return resumeInfo.additional_skill ||false;
}
export const selectBio = (state) => {
    let recordDetails = state.resume.recordDetails || {}
    let resumeInfo = recordDetails.resume_info || {}
    return resumeInfo.your_bio
}
export const selectProfilePic = (state) => {
    let recordDetails = state.resume.recordDetails || {}
    let resumeInfo = recordDetails.resume_info || {}
    return resumeInfo.profile_pic || null;
}
export const selectReload = (state) => state.resume.reload
export const selectHobbies = (state) => {
    let record = state.resume.recordDetails || {}
    let resumeInfo = record.resume_info || {}
    return {
        entertainment: resumeInfo.entertainment||'',
        music: resumeInfo.music||'',
        sports: resumeInfo.sports||'',
        leisure: resumeInfo.leisure||'',
        adventure: resumeInfo.adventure||'',
        travel: resumeInfo.travel||'',
        books: resumeInfo.books||'',
        any_other: resumeInfo.any_other||''
    }
}
export const selectSocialContribution = (state) => {
    let recordDetails = state.resume.recordDetails || {}
    let resumeInfo = recordDetails.resume_info || {}
    return resumeInfo.additional_skill||[];
}
export const SelectDocuments = (state) => {
    let recordDetails = state.resume.recordDetails || {}
    let resumeInfo = recordDetails.resume_info || {}
    return resumeInfo.upload_photo_media||[];
}
export const selectVideo = (state) => {
    let recordDetails = state.resume.recordDetails || {}
    let resumeInfo = recordDetails.resume_info || {}
    return resumeInfo.video_from_url;
}
export const selectSocilaLinks = (state) => {
    let record = state.resume.recordDetails.resume_info || {}
    return {
        facebook: record.link_facebook,
        twitter: record.link_twitter,
        instagram: record.link_instagram,
        linkedin: record.link_linkedin,
        other: record.link_other
    }
}
export const selectNewJob = (state)=> state.resume.newJob
export const selectNewEducation = (state)=> state.resume.newEducation
export const selectNewCertificate = (state)=> state.resume.newCertificate
export const selectNewAdditionalSkill =  (state)=> state.resume.newAdditionalSkill
export const selectNewDesignation = (state)=> state.resume.newDesignation
export const selectNewPhotoMedia = (state)=> state.resume.newPhotoMedia
export const selectNewProject = (state)=> state.resume.newProject
export const selectNewRoles = (state) => state.resume.newRoles
export const selectUserInfo = (state) => state.resume.recordDetails
export const selectEditPageDetails = (state)=> state.resume.editPageDetails;
export const getPageOn = (state) => state.resume.pageOn;     
export const selectToEdit = (state)=> state.resume.toEdit;
export const getLoaderstate = (state) => state.resume.loaderval;     
export const getDownLoadDetails = (state)=> state.resume.downLoadDetails
export const { nextForm, prevForm, setForm, reload, toggleNewJob,toggleNewDesignation,toggleNewEducation,toggleNewCertificate,toggleNewAdditionalSkills,toggleNewPhotoMedia,toggleNewProject, resetResume, toggleNewRoles, setResumeError, resetError } = resumeSlice.actions;

export default resumeSlice.reducer;


