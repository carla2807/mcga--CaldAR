import React from 'react';
import { useForm } from 'react-hook-form';

const AddTechnician = (props) => {
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    props.addTechnician(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input type='text' name='first_name' />
      <label>Last Name</label>
      <input type='text' name='last_name' />
      <label>Phone number</label>
      <input type='text' name='phone_number' />
      <label>Dni</label>
      <input type='text' name='dni' />
      <label>Boiler Specialty</label>
      <input type='text' name='boiler_specialty' />
      <button type='submit'>Add new technician</button>
    </form>
  );
};

export default AddTechnician;
