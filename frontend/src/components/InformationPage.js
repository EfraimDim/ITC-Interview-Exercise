import { useContext } from 'react'
import { AppContext } from './AppContext'
import styles from '../styles/InformationPage.module.css'

function InformationPage() {

  const { loginInfo, setLoginInfo } = useContext(AppContext);

  const logout = () => {
    setLoginInfo(null)
  }

  return (
      <div>
        <button onClick={logout} className={styles.button}>LogOut</button>
        <h2 className={styles.header}>Active Employees</h2>
        <h1 className={styles.info}>{loginInfo.totalEmployees}</h1>

        <h2 className={styles.header}>Fairness & Equality of Gender by All Time</h2>
        <div className={styles.table}>
          <div className={styles.infoWrapper}>
            <div className={styles.tableHeader}>Gender</div>
            <div className={styles.tableHeader}>Number Of Employees</div>
            <div className={styles.tableHeader}>Average Salary</div>
          </div>
          <>{loginInfo.equalityAllWorkers.map((queryResult, index) => {
                      return (
                        <div key={index} className={styles.infoWrapper}>
                        <div className={styles.tableInfo}>{queryResult.gender}</div>
                        <div className={styles.tableInfo}>{queryResult.no_emp}</div>
                        <div className={styles.tableInfo}>{queryResult.avgSalary}</div>
                        </div>
                      )
          })}</>
        </div>

        <h2 className={styles.header}>Fairness & Equality of Gender by Active Employees</h2>
        <div className={styles.table}>
          <div className={styles.infoWrapper}>
            <div className={styles.tableHeader}>Gender</div>
            <div className={styles.tableHeader}>Number Of Employees</div>
            <div className={styles.tableHeader}>Average Salary</div>
          </div>
          <>{loginInfo.equalityActiveWorkers.map((queryResult, index) => {
                      return (
                        <div key={index} className={styles.infoWrapper}>
                        <div className={styles.tableInfo}>{queryResult.gender}</div>
                        <div className={styles.tableInfo}>{queryResult.no_emp}</div>
                        <div className={styles.tableInfo}>{queryResult.avgSalary}</div>
                        </div>
                      )
          })}</>
        </div>

        <h2 className={styles.header}>Payroll Forecast</h2>
        <div className={styles.table}>
          <div className={styles.infoWrapper}>
            <div className={styles.tableHeader}>Department Name</div>
            <div className={styles.tableHeader}>Department Number</div>
            <div className={styles.tableHeader}>Active Employees</div>
            <div className={styles.tableHeader}>No. of Salaries Expected</div>
            <div className={styles.tableHeader}>Upcoming Monthly Payroll</div>
            <div className={styles.tableHeader}>Yearly Payroll</div>
          </div>
          <>{loginInfo.payrollExpectation.map((queryResult, index) => {
                      return (
                        <div key={index} className={styles.infoWrapper}>
                        <div className={styles.tableInfo}>{queryResult["Departments.dept_name"]}</div>
                        <div className={styles.tableInfo}>{queryResult["Departments.dept_no"]}</div>
                        <div className={styles.tableInfo}>{queryResult.no_emp}</div>
                        <div className={styles.tableInfo}>{queryResult.no_emp}</div>
                        <div className={styles.tableInfo}>{parseInt(queryResult.sumSalary) / 12}</div>
                        <div className={styles.tableInfo}>{queryResult.sumSalary}</div>
                        </div>
                      )
                })}</>
        </div>
      </div>
    );
  }
  
  export default InformationPage;