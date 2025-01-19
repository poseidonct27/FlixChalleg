import { useState } from 'react';

export const UseValidateForm = () => {
  const [valid, setValid] = useState(false);

  const [form, setForm] = useState(null);

  const [formErrors, setFormErrors] = useState([]);

  const [formData, setFormData] = useState();

  const parseFormData = () => {
    const formData = new FormData(form);
    const formJSON = Object.fromEntries(formData.entries());
    setFormData(formJSON);
  };

  const validateForm = () => {
    const formIsValid = form.checkValidity();

    if (formIsValid) {
      const isValidVideoURL =
        form['url_video'].value.startsWith('https://') || form['url_video'].value.startsWith('http://');
      const isValidPhotoURL =
        form['url_image'].value.startsWith('https://') || form['url_image'].value.startsWith('http://');
      const isValidCategory = form['category'].value !== '-1';

      if (!isValidVideoURL) setFormErrors(['La URL de video debe ser válida']);
      if (!isValidPhotoURL) setFormErrors(['La URL de la imagen debe ser válida']);
      if (!isValidCategory) setFormErrors(['Debes seleccionar una categoría válida']);

      if (isValidVideoURL && isValidPhotoURL && isValidCategory) {
        setValid(true);
        setFormErrors([]);
        parseFormData();
        return;
      }
    }

    setValid(false);
  };

  if (form?.isValid) setValid(true);

  return { isValid: valid, setForm, validateForm, formErrors, formData };
};
