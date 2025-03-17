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
    <option value="Arkansas">Arkansas</option>
    <option value="California">California</option>
    <option value="Colorado">Colorado</option>
    <option value="Connecticut">Connecticut</option>
    <option value="Delaware">Delaware</option>
    <option value="District Of Columbia">District Of Columbia</option>
    <option value="Florida">Florida</option>
    <option value="Georgia">Georgia</option>
    <option value="Hawaii">Hawaii</option>
    <option value="Idaho">Idaho</option>
    <option value="Illinois">Illinois</option>
    <option value="Indiana">Indiana</option>
    <option value="Iowa">Iowa</option>
    <option value="Kansas">Kansas</option>
    <option value="Kentucky">Kentucky</option>
    <option value="Louisiana">Louisiana</option>
    <option value="Maine">Maine</option>
    <option value="Maryland">Maryland</option>
    <option value="Massachusetts">Massachusetts</option>
    <option value="Michigan">Michigan</option>
    <option value="Minnesota">Minnesota</option>
    <option value="Mississippi">Mississippi</option>
    <option value="Missouri">Missouri</option>
    <option value="Montana">Montana</option>
    <option value="Nebraska">Nebraska</option>
    <option value="Nevada">Nevada</option>
    <option value="New Hampshire">New Hampshire</option>
    <option value="New Jersey">New Jersey</option>
    <option value="New Mexico">New Mexico</option>
    <option value="New York">New York</option>
    <option value="North Carolina">North Carolina</option>
    <option value="North Dakota">North Dakota</option>
    <option value="Ohio">Ohio</option>
    <option value="Oklahoma">Oklahoma</option>
    <option value="Oregon">Oregon</option>
    <option value="Pennsylvania">Pennsylvania</option>
    <option value="Rhode Island">Rhode Island</option>
    <option value="South Carolina">South Carolina</option>
    <option value="South Dakota">South Dakota</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Texas">Texas</option>
    <option value="Utah">Utah</option>
    <option value="Vermont">Vermont</option>
    <option value="Virginia">Virginia</option>
    <option value="Washington">Washington</option>
    <option value="West Virginia">West Virginia</option>
    <option value="Wisconsin">Wisconsin</option>
    <option value="Wyoming">Wyoming</option>


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
