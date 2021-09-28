import React from 'react';

const TechnicianTable = (props) => {
  console.log(props.technicians);
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone number</th>
          <th>Dni</th>
          <th>Boiler Specialty</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.technicians.map((technician) => (
          <tr key={technician.id}>
            <td>{technician.id}</td>
            <td>{technician.first_name}</td>
            <td>{technician.last_name}</td>
            <td>{technician.phone_number}</td>
            <td>{technician.dni}</td>
            <td>{technician.boiler_specialty}</td>

            <td>
              <button
                className='button muted-button'
                onClick={() => {
                  props.editRow(technician);
                }}
              >
                Edit
              </button>
              <button
                className='button muted-button'
                onClick={() => {
                  props.deleteTechnician(technician.id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TechnicianTable;
