import React, { useState } from 'react';
import AddTechnician from './components/AddTechnician';
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

  return (
    <div className='container'>
      <h1>Technicians</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          <h2>Add technician</h2>
          <AddTechnician addTechnician={addTechnician} />
        </div>
        <div className='flex-large'>
          <h2>View technicians</h2>

          <TechnicianTable technicians={technicians} />
        </div>
      </div>
    </div>
  );
};

export default App;
