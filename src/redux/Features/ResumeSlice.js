import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";

const initialState = {
    loading: false,
    recordDetails: {},
    company_job_record_id: '',
    graph: {},
    status: '',
    reload: true,
    error: '',
    message: '',
    form: null,
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
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
export const additionalSkills = createAsyncThunk('authentication/additionalSkills', async (data, { rejectWithValue }) => {
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
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        nextForm: (state) => {
            if (state.form < 17) state.form += 1;
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
    },
    extraReducers(builder) {
        builder.addCase(resumeInfo.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
        }).addCase(resumeInfo.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.message = ''
            state.recordDetails = action.payload.data.recordDetails
            state.form = action.payload.data.recordDetails.form
            state.reload = false
        }).addCase(resumeInfo.rejected, (state, action) => {
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
            state.message = action.payload.message


        }).addCase(additionalSkills.pending, (state, action) => {
            state.loading = true
            state.status = 'loading'
            state.error = false
        }).addCase(additionalSkills.fulfilled, (state, action) => {
            state.loading = false
            state.status = 'succeeded'
            state.message = action.payload.data.message
        }).addCase(additionalSkills.rejected, (state, action) => {
            state.loading = false
            state.status = 'Rejected'
            state.error = action.payload.error
            state.message = action.payload.message


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
            state.message = action.payload.message


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
            state.message = action.payload.message


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
export const selectLastCompany = (state) => {
    let recordDetails = state.resume.recordDetails || {}
    let resumeInfo = recordDetails.resume_info || {}
    let company = resumeInfo.company || {}
    return (company && company[company.length - 1]) || {}
}
export const selectEducation = (state) => {
    let recordDetails = state.resume.recordDetails || {}
    let resumeInfo = recordDetails.resume_info || {}
    return resumeInfo.education;
}
export const selectCertificate = (state) => {
    let recordDetails = state.resume.recordDetails || {}
    let resumeInfo = recordDetails.resume_info || {}
    return resumeInfo.certificate;
}
export const selectAdditionalSkills = (state) => {
    let recordDetails = state.resume.recordDetails || {}
    let resumeInfo = recordDetails.resume_info || {}
    return resumeInfo.additional_skill;
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
        entertainment: resumeInfo.entertainment,
        music: resumeInfo.music,
        sports: resumeInfo.sports,
        leisure: resumeInfo.leisure,
        adventure: resumeInfo.adventure,
        travel: resumeInfo.travel,
        books: resumeInfo.books,
        any_other: resumeInfo.any_other
    }
}
export const selectSocialContribution = (state) => {
    let recordDetails = state.resume.recordDetails || {}
    let resumeInfo = recordDetails.resume_info || {}
    return resumeInfo.additional_skill;
}
export const SelectDocuments = (state) => {
    let recordDetails = state.resume.recordDetails || {}
    let resumeInfo = recordDetails.resume_info || {}
    return resumeInfo.upload_photo_media;
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
export const { nextForm, prevForm, setForm, reload } = resumeSlice.actions;

export default resumeSlice.reducer;


