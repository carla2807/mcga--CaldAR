import React from 'react';
import { useForm } from 'react-hook-form';

const EditTechnicianForm = (props) => {
  // console.log(props.currentTechnician);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: props.currentTechnician,
  });
  const onSubmit = (data) => {
    data.id = props.currentTechnician.id;
    props.updateTechnician(props.currentTechnician.id, data);

    //console.log(data);
  };
  setValue('first_name', props.currentTechnician.first_name);
  setValue('last_name', props.currentTechnician.last_name);
  setValue('phone_number', props.currentTechnician.phone_number);
  setValue('dni', props.currentTechnician.dni);
  setValue('boiler_specialty', props.currentTechnician.boiler_specialty);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input type='text' {...register('first_name')} />
      <label>Last Name</label>
      <input type='text' {...register('last_name')} />
      <label>Phone number</label>
      <input type='text' {...register('phone_number')} />
      <label>Dni</label>
      <input type='text' {...register('dni')} />
      <label>Boiler Specialty</label>
      <input type='text' {...register('boiler_specialty')} />
      <button type='submit'>Edit technician</button>
    </form>
  );
};

export default EditTechnicianForm;
