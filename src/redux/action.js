
export const SET_FORM_DATA='SET_FORM_DATA'
export const clear_FORM_DATA='clear_FORM_DATA'

export const setFormData=(data)=>{
    return{
        type:SET_FORM_DATA,
        payload:data
    }
}
export const clearFormData=()=>{
    return{
        type:clear_FORM_DATA
    }
}