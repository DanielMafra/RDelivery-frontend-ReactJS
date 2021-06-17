import React from 'react';

const types = {
  phone: {
    regex: /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/,
    message: 'Preencha um número de telefone válido.'
  }
}

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor.');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
    if (target.id === 'phone') {
      const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
      const str = target.value.replace(/[^0-9]/g, "").slice(0, 11);
      const result = str.replace(regex, "($1)$2-$3");
      setValue(result);
    }
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }

}

export default useForm;