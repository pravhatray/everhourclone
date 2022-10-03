import { async } from "@firebase/util";
import axios from "axios";
import { SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS, SIGNUP_UPDATE } from "./signup.types";
export const signup = (creds) => async (dispatch) => {
    dispatch({ type: SIGNUP_LOADING })
    try {
        let res = await axios.post("https://cloneofeverhour.herokuapp.com/users/signup", creds)
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
        console.log(res.data)
         return res.data
        
    }
    catch (e) {
        dispatch({type:SIGNUP_ERROR})
    }
    
}

// export const update = (id,newcreds) => async (dispatch) => {
//     dispatch({ type: SIGNUP_LOADING })
//     try {
//         let res = await axios.patch(`https://cloneofeverhour.herokuapp.com/users/${id}`, newcreds)
//         dispatch({ type: SIGNUP_UPDATE, payload: res.data });
//         return res.data
        
//     }
//     catch (e) {
//         dispatch({type:SIGNUP_ERROR})
//      }
// }