import { useState, useContext } from 'react';
import styles from '../styles/Login.module.css';
import { TextField } from '@mui/material';
import { AppContext } from './AppContext';
import axios from 'axios';
import swal from 'sweetalert';


function Login() {

  const { setLoginInfo, setLoadSpinner } = useContext(AppContext);

  const [employeeID, setEmployeeID] = useState('');
  const [password, setPassword] = useState('');

  const handleEmployeeID = (e) =>{
    setEmployeeID(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = async(e) => {
    try{
      e.preventDefault();
      setLoadSpinner(true);
      const loginAuth = await axios.post('/users/login', {
        employeeID: employeeID,
        password: password
      });
      setEmployeeID('');
      setPassword('');
      setLoginInfo(loginAuth.data);
      setLoadSpinner(false);
      swal({
        title: "Login Success!",
        text: `Welcome ${loginAuth.data.user.first_name} ${loginAuth.data.user.last_name}`,
        icon: "success",
        button: "continue!",
      });
    } catch(e) {
        setLoadSpinner(false);
        swal({
          title: "Login Failed!",
          text: `${e.response.data}`,
          icon: "error",
          button: "okay",
        });
        console.log(e);
    }
  };

  return (
      <div>
        <form className={styles.form} onSubmit={login}>
          <h1 className={styles.header}>Login</h1>

          <TextField size="large" required type="text" value={employeeID} onChange={handleEmployeeID} 
          InputLabelProps={{style: {color: '#fff'}}} sx={{margin:"20px"}} inputProps={{style: {color: 'white'}}} label="Employee ID" />
          
          <TextField size="large" required type="text" value={password} onChange={handlePassword} 
          InputLabelProps={{style: {color: '#fff'}}} sx={{margin:"20px"}} inputProps={{style: {color: 'white'}, minLength: 10, maxLength: 10}}  label="Birth Date: xxxx-xx-xx" />
          <button className={styles.button} type='submit'>Enter!</button>
        </form>
      </div>
    );
  };
  
  export default Login;