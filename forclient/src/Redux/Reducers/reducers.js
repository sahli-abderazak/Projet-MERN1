import {SIGNUP,SIGNIN,CURRENT,PRODUCT, GET_PRODUCT} from "../Consts/action-type"


const initalState = {
    SignUpUsers : {},
    SignInUsers : {} ,
    GetUser : {} ,
    newProduct : {} ,
    getProduct: [],
    getOneProduct : []
}
  

const UserReducer = (state = initalState, action) => {
    switch (action.type) {
        case SIGNUP: return{
            ...state ,
            SignUpUsers : action.payload
        }
        case SIGNIN : 
            return {
                ...state ,
                SignInUsers : action.payload
            }
            case CURRENT : 
            return {
                ...state ,
                GetUser : action.payload
            }
            case PRODUCT : 
            return {
                ...state ,
                newProduct  : action.payload
            }
            case GET_PRODUCT : 
            return {
                ...state ,
                getProduct  : action.payload
            }
            case 'getOneProduct': 
            return {
                ...state ,
                getOneProduct : [action.payload]
            }
        default: return state
        
    }
}

export default UserReducer ;



