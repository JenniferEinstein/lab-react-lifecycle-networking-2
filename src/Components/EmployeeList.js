import React from "react";
import { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  
  // let BASE_URL = "https://resource-veterinarian-api.fly.dev/api"
  // I tried doing something with BASE_URL, but it didn't work out


  useEffect(() => {
    fetch(`https://resource-veterinarian-api.fly.dev/api/employees`)
      .then((response) => response.json())
      .then((response)=> {
        console.log("The response is ", response)
        setEmployees(response);
      })
      .catch(err => {
        throw new Error(err)
      })
  }, [])

  return (
    <main>
      <h2>All Staff</h2>
      <p> </p>
      <section className="employee-list">
        {employees.map(employee => {
          return (
            <Employee key={employee.id} employee={employee}/>
          )
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
