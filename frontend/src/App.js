import { useState } from 'react'
import styles from './styles/App.module.css'
import Login from './components/Login'
import InformationPage from './components/InformationPage'
import { AppContext } from "./components/AppContext"
import { LoadingButton } from '@mui/lab';

function App() {

  const [loginInfo, setLoginInfo] = useState(null)
  const [loadSpinner, setLoadSpinner] = useState(false)

  
  return (
    <AppContext.Provider value={{
      setLoginInfo,
      loginInfo,
      setLoadSpinner
    }}>
    <div>
      {loadSpinner ? 
        <div className={styles.loadingButton}>
          <LoadingButton loading={loadSpinner} sx={{transform: "scale(3)"}} />
        </div>
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
