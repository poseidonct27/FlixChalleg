import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { Categories } from '../../data/Categories';
import { UseValidateForm } from '../../hooks/UseValidateForm';
import { AddVideoService } from '../../services/Controller';
import './AddVideo.css';

const addNewVideo = (form, formData) => {
  form.preventDefault();

  toast.promise(AddVideoService(formData), {
    pending: 'Agregando video...',
    success: {
      render: () => {
        form.target.reset();
        return 'Video agregado exitosamente';
      },
    },
    error: 'Error al crear el video',
  });
};

const AddVideo = () => {
  const formNewVideo = useRef(null);

  const { isValid, setForm, validateForm, formErrors, formData } = UseValidateForm();

  useEffect(() => {
    setForm(formNewVideo.current);
  }, []);

  return (
    <main>
      <div className='main__header'>
        <h2>Nuevo video</h2>
        <h3>Complete el formulario para crear una nueva tarjeta de video</h3>
        <div className='main_header-anim'>
          <DotLottieReact src='anims/video_anim.lottie' loop autoplay />
        </div>
      </div>

      <section>
        <form
          ref={formNewVideo}
          onSubmit={(x) => addNewVideo(x, formData)}
          className='form__new-video'
          onChange={validateForm}
          aria-label='Formulario para agregar un nuevo video'
        >
          <div>
            <label htmlFor='title'>Titulo</label>
            <input type='text' name='title' placeholder='Título' required />
          </div>

          <div>
            <label htmlFor='category'>Categoria</label>
            <select name='category' id='category'>
              <option value='-1'>Selecciona una categoria</option>
              {Categories.map((x) => (
                <option key={x.id} value={x.id}>
                  {x.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor='url_image'>Imagen</label>
            <input type='text' name='url_image' placeholder='https://url-imagen.com' required />
          </div>

          <div>
            <label htmlFor='url_video'>Video</label>
            <input type='text' name='url_video' placeholder='https://url-video.com' required />
          </div>

          <div className='form__description'>
            <label htmlFor='description'>Descripción</label>
            <textarea name='description' placeholder='Descripción del video'></textarea>
          </div>

          <div className='form__buttons'>
            <input
              className='button_ok'
              type='submit'
              value='Enviar'
              disabled={!isValid}
              aria-label='Boton para enviar el formulario'
            />
            <input
              className='button_cancel'
              type='reset'
              value='Limpiar'
              aria-label='Boton para limpiar el formulario'
            />
          </div>
        </form>
        {formErrors.length > 0 && (
          <ul className='list_form-errors'>
            {formErrors.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default AddVideo;
