import { SET_FORM_DATA,clear_FORM_DATA } from './action';

const initialValues={
    form:{}
}

const FormReducer=(state=initialValues,action)=>{
 switch(action.type){
    case 'SET_FORM_DATA':
        return{
            ...state,
            form:{...state.form,...action.payload}
        }
    case 'CLEAR_FORM_DATA':
        return{
            ...state,
            form:{}
        }
    default:
        return state;
 }
}



export default FormReducer;
