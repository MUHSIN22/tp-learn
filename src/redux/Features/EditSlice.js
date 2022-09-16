import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    designationForm: null,
    editCompany: null,
    editDesignationID: null,
    editProjectID: null,
    formProgress : 0
}

export const editSlice = createSlice({
    name: "editUtils",
    initialState,
    reducers: {
        addCompanyForEdit: (state,payload) => {
            state.editCompany =  payload.payload
        },
        addDesignationForEdit: (state,payload) => {
            state.editDesignationID = payload.payload
        },
        addProjectForEdit : (state, payload) => {
            state.editProjectID = payload.payload
        },
        changeExperienceForm : (state,payload) => {
            state.formProgress = payload.payload
        }
    }
})

export const {addCompanyForEdit, addDesignationForEdit, changeExperienceForm, addProjectForEdit} = editSlice.actions
export const selectCompanyForEdit = (state) => state.editDetails.editCompany
export const selectDesignationForEdit = (state) => state.editDetails.editDesignationID
export const selectFormProgress = (state) => state.editDetails.formProgress
export const getEditProjectID = (state) => state.editDetails.editProjectID

export default editSlice.reducer;