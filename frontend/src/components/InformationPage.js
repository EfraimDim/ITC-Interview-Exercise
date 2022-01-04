import { useContext } from 'react'
import { AppContext } from './AppContext'

function InformationPage() {

    const { loginInfo } = useContext(AppContext);

    return (
      <div>
        <h2>Active Employees</h2>
        <h1>{loginInfo.totalEmployees}</h1>
        <h2>Fairness By Gender All Time</h2>
        <div style={{display: "flex"}}>
          <div>
            <div>Gender</div>
            <div>{loginInfo.equalityAllWorkers[0].gender}</div>
            <div>{loginInfo.equalityAllWorkers[1].gender}</div>
          </div>
          <div>
            <div>Number Of Employees</div>
            <div>{loginInfo.equalityAllWorkers[0].no_emp}</div>
            <div>{loginInfo.equalityAllWorkers[1].no_emp}</div>
          </div>
          <div>
            <div>Average Salary</div>
            <div>{loginInfo.equalityAllWorkers[0].avgSalary}</div>
            <div>{loginInfo.equalityAllWorkers[1].avgSalary}</div>
          </div>
        </div>
        <h2></h2>
        <h1></h1>
        <h2></h2>
       
      </div>
    );
  }
  
  export default InformationPage;