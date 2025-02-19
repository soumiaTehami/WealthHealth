import { useSelector } from 'react-redux';

const EmployeeList = () => {
  // Accéder à l'état des employés depuis Redux
  const employees = useSelector((state) => state.employees);
  const isLoading = useSelector((state) => state.isLoading); // Si tu as un état pour indiquer si c'est en cours de chargement
  const error = useSelector((state) => state.error); // Si tu as un état pour gérer les erreurs

  if (isLoading) {
    return <div>Loading...</div>;  // Affiche un message de chargement
  }

  if (error) {
    return <div>Une erreur est survenue : {error}</div>;  // Affiche l'erreur si elle existe
  }

  // Vérifier si employees est un tableau
  if (!Array.isArray(employees) || employees.length === 0) {
    return <div>Aucun employé trouvé.</div>;  // Si ce n'est pas un tableau ou si la liste est vide
  }

  return (
    <div>
      <h2>Current Employees</h2>
      <table border="1">
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
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.startDate}</td>
              <td>{employee.department}</td>
              <td>{employee.birthDate}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
