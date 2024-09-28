import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { createContext, useReducer } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppContext = createContext(null);

// A reducer function to be used with useReducer
const reducer = (state, action) =>{  
  switch(action.type){
    case "auth":
      return{
        ...state,
        user: action.user
      };
    case "users":
      return{
        ...state,
        users: action.payload
      };
    case "posts":
      return{
        ...state,
        posts: action.payload
      };
    case "add/user":
      return{
        ...state,
        users: {
          ...state.users,
          data: [action.payload, ...state.users.data]
        }
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    users:{
      next_fetch_at: new Date(),
      data: []
    },
    posts:{
      next_fetch_at: new Date(),
      data: []
    }
  })

  return (
    <BrowserRouter>
      <AppContext.Provider value={{state, dispatch}}>
        {/* we need this component in order toastify to work, now we can use toast function in our application and it will work */}
        <ToastContainer />
        <AppRoutes />
      </AppContext.Provider>
    </BrowserRouter>
  )
}

export default App
