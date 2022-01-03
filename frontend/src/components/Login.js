import { useState, useContext } from 'react';
import { AppContext } from './AppContext'
import axios from 'axios'


function Login() {

    const { setLoginInfo } = useContext(AppContext);

    const [employeeID, setEmployeeID] = useState('')
    const [password, setPassword] = useState('')

    const handleEmployeeID = (e) =>{
      setEmployeeID(e.target.value)
    }

    const handlePassword = (e) => {
      setPassword(e.target.value)
    }

    const login = async(e) => {
      e.preventDefault()
      const loginAuth = await axios.post('http://localhost:5000/users/login', {
        employeeID: employeeID,
        password: password
      })
      setEmployeeID('')
      setPassword('')
      setLoginInfo(loginAuth.data)
    }

    return (
      <div>
        <form onSubmit={login}>
          <h1>Login</h1>
          <label>Employee ID</label>
          <input required type="text" value={employeeID} onChange={handleEmployeeID} placeholder="ID" />
          <label>Password</label>
          <input required type="text" value={password} onChange={handlePassword} placeholder="password" />
          <button type='submit'>Login!</button>
        </form>
       
      </div>
    );
  }
  
  export default Login;