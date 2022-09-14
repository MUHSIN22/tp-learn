import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    designationForm: null,
    editCompany: null,
    editDesignationID: null,
    formProgress : 0
}

export const editSlice = createSlice({
    name: "editUtils",
    initialState,
    reducers: {
        addCompanyForEdit: (state,payload) => {
            state.editCompany =  payload.payload
        }
    }
})

export const {addCompanyForEdit} = editSlice.actions

export const selectCompanyForEdit = (state) => state.editDetails.editCompany
export const selectFormProgress = (state) => state.formProgress
export default editSlice.reducer;