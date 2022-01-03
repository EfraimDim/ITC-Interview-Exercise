import { useState } from 'react'
import Login from './components/Login'
import InformationPage from './components/InformationPage'
import { AppContext } from "./components/AppContext"

function App() {

  const [loginInfo, setLoginInfo] = useState(null)
  
  return (
    <AppContext.Provider value={{
      setLoginInfo
    }}>
    <div>
      
      {loginInfo ? <InformationPage/> : <Login/>}
     
    </div>
    </AppContext.Provider>
  );
}

export default App;
