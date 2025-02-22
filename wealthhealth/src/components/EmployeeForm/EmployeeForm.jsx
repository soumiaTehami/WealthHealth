import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/slices/employeeSlice";

import "./EmployeeForm.scss";

const EmployeeForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "Alabama",
    zipCode: "",
    department: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(formData)); // Ajouter l'employé au store Redux
    alert("Employee added successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      street: "",
      city: "",
      state: "Alabama",
      zipCode: "",
      department: "",
    });
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
    <h2 className="employee-form__title">Create Employee</h2>
  
    <label>First Name</label>
    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
  
    <label>Last Name</label>
    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
  
    <label>Date of Birth</label>
    <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
  
    <label>Start Date</label>
    <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
  
    <fieldset className="employee-form__address">
      <legend>Address</legend>
      <label>Street</label>
      <input type="text" name="street" value={formData.street} onChange={handleChange} required />
  
      <label>City</label>
      <input type="text" name="city" value={formData.city} onChange={handleChange} required />
  
      <label>State</label>
      <select name="state" value={formData.state} onChange={handleChange}>
        <option value="Alabama">Alabama</option>
        <option value="Alaska">Alaska</option>
        <option value="Arizona">Arizona</option>
      </select>
  
      <label>Zip Code</label>
      <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
    </fieldset>
  
    {/* Department en bas du formulaire */}
    <label htmlFor="department">Department</label>
    <select name="department" id="department" value={formData.department} onChange={handleChange}>
      <option value="Sales">Sales</option>
      <option value="Marketing">Marketing</option>
      <option value="Engineering">Engineering</option>
      <option value="Human Resources">Human Resources</option>
      <option value="Legal">Legal</option>
    </select>
  
    <button type="submit" className="employee-form__submit">Save</button>
  </form>
  
  );
};

export default EmployeeForm;
