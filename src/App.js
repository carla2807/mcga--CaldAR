import React, { useState } from 'react';
import AddTechnician from './components/AddTechnician';
import EditTechnicianForm from './components/EditTechnicianForm';
import TechnicianTable from './components/TechnicianTable';
import Technicians from './mocks/Technicians.json';

const App = () => {
  //State
  const [technicians, setTechnicians] = useState(Technicians);

  //Add technician
  const addTechnician = (technician) => {
    technician.id = technicians.length + 1;

    setTechnicians([...technicians, technician]);
  };

  //Delete technician
  const deleteTechnician = (id) => {
    setTechnicians(technicians.filter((tech) => tech.id !== id));
  };

  //Edit technician
  const [editing, setEditing] = useState(false);
  const [currentTechnician, setcurrentTechnician] = useState({
    id: null,
    first_name: '',
    last_name: '',
    phone_number: '',
    dni: '',
    boiler_specialty: '',
  });

  const editRow = (tech) => {
    setEditing(true);
    setcurrentTechnician({
      id: tech.id,
      first_name: tech.first_name,
      last_name: tech.last_name,
      phone_number: tech.phone_number,
      dni: tech.dni,
      boiler_specialty: tech.boiler_specialty,
    });
  };

  const updateTechnician = (id, updateTechnician) => {
    setEditing(false);
    setTechnicians(
      technicians.map((tech) => (tech.id === id ? updateTechnician : tech))
    );
  };

  return (
    <div className='container'>
      <h1>Technicians</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (
            <div>
              <h2>Edit technician</h2>
              <EditTechnicianForm
                currentTechnician={currentTechnician}
                updateTechnician={updateTechnician}
              />
            </div>
          ) : (
            <div>
              <h2>Add technician</h2>
              <AddTechnician addTechnician={addTechnician} />
            </div>
          )}
        </div>
        <div className='flex-large'>
          <h2>View technicians</h2>

          <TechnicianTable
            technicians={technicians}
            deleteTechnician={deleteTechnician}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
