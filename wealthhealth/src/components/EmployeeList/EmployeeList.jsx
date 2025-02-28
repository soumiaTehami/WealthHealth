import { useState } from "react";
import { useSelector } from "react-redux";
import "./EmployeeList.scss";

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees.employees);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  if (!employees || employees.length === 0) {
    return <div className="no-employees">No employees found.</div>;
  }

  // Filtrage des employés en fonction du terme de recherche
  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Pagination
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(filteredEmployees.length / entriesPerPage);

  return (
    <div className="employee-list">
      <h2>Current Employees</h2>

      <div className="controls">
        <label>
          Show
          <select value={entriesPerPage} onChange={(e) => setEntriesPerPage(Number(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
          </select>
          entries
        </label>


        <label>
          Search:
          <input
            type="text"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Start Date</th>
              <th>Department</th>
              <th>Date of Birth</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.startDate}</td>
                <td>{employee.department}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.street}</td>
                <td>{employee.city}</td>
                <td>{employee.state}</td>
                <td>{employee.zipCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="entries-info">
        Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredEmployees.length)} of {filteredEmployees.length} entries
      </p>

      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage}</span>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      <a href="/" className="home-link">Home</a>
    </div>
  );
};

export default EmployeeList;
