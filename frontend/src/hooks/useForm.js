import { useState } from 'react';

const useForm = initialState => {
  const [form, setForm] = useState(initialState);

  const handleInputChange = e => {
    const newValue = e.target.value;
    const fieldName = e.target.name;

    setForm({ ...form, [fieldName]: newValue });
  };

  return [form, handleInputChange, setForm];
};

export default useForm;
