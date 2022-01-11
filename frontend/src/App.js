import { useState } from 'react'
import './styles/App.module.css'
import LoadingButtonComponent from './components/LoadingButton'
import Login from './components/Login'
import InformationPage from './components/InformationPage'
import { AppContext } from "./components/AppContext"


function App() {

  const [loginInfo, setLoginInfo] = useState(null)
  const [loadSpinner, setLoadSpinner] = useState(false)

  
  return (
    <AppContext.Provider value={{
      setLoginInfo,
      loginInfo,
      setLoadSpinner,
      loadSpinner
    }}>
    <div>
      {loadSpinner ? 
        <LoadingButtonComponent/>
        : 
        <> 
        {loginInfo ? <InformationPage/> : <Login/>}
        </>
      }
    </div>
    </AppContext.Provider>
  );
}

export default App;
