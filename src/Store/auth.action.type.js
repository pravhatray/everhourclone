import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { LOGIN_GET_ERROR, LOGIN_GET_SUCCESS, LOGIN_GET_LOADING,LOGOUT_GET, UPDATE_GET_SUCCESS } from "./auth.types";
export const login = (creds) => async (dispatch) => {

    // dispatch({ type: LOGIN_GET_LOADING });
    try {
        let response = await axios.post("https://cloneofeverhour.herokuapp.com/users/login", creds)
        dispatch({ type: LOGIN_GET_SUCCESS, payload: response.data });
        return response.data;
        
    }
    catch (e) {
        dispatch({ type: LOGIN_GET_ERROR })
        
   
    }


    
}
export const update = (id, newcred) => async (dispatch) => {
    try {
        let res= await axios.patch(`https://cloneofeverhour.herokuapp.com/users/${id}`,newcred)
        dispatch({ type: UPDATE_GET_SUCCESS, payload: res.data });
        
    }
    catch(e) {
        dispatch({ type: LOGIN_GET_ERROR })
    }
  

  }
export const logout = () => ({type:LOGOUT_GET})