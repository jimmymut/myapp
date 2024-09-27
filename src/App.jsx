// import Home from "./pages/Home"

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { createContext } from "react";

export const UserContext = createContext(null);


const value = {
  name: "Mutabazi",
  email: "myemail@gmailcom"
}

function App() {

  return (
    <BrowserRouter>
    <UserContext.Provider value={value}>
    <AppRoutes/>
    </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
