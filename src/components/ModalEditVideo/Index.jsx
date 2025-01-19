import { useContext, useEffect, useRef } from 'react';
import { Categories } from '../../data/Categories';
import HomeContext from '../../hooks/HomeContext';
import { UseValidateForm } from '../../hooks/UseValidateForm';

const Index = ({ close, video: { id, title, category, url_image, url_video, description } }) => {
  const { editVideo } = useContext(HomeContext);

  const formNewVideo = useRef(null);

  const { isValid, setForm, validateForm, formData } = UseValidateForm();

  useEffect(() => {
    setForm(formNewVideo.current);
  }, []);

  return (
    <div className='modal' aria-label='Modal de edicion de video'>
      <div className='modal_body' aria-label='Cuerpo del modal de edicion de video'>
        <span className='modal_body-title' aria-label='Titulo del modal de edicion de video' title='Editar video'>
          Editar video
        </span>
        <div className='modal_body-content'>
          <form
            ref={formNewVideo}
            onSubmit={(x) => {
              x.preventDefault();
              editVideo({ ...formData, id: id });
              close();
            }}
            className='form__new-video'
            onChange={validateForm}
            aria-label='Formulario de edicion de video'
          >
            <div>
              <label htmlFor='title'>Titulo</label>
              <input type='text' name='title' placeholder='Título' required defaultValue={title} />
            </div>

            <div>
              <label htmlFor='category'>Categoria</label>
              <select name='category' id='category' defaultValue={category}>
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
              <input
                type='text'
                name='url_image'
                placeholder='https://url-imagen.com'
                required
                defaultValue={url_image}
              />
            </div>

            <div>
              <label htmlFor='url_video'>Video</label>
              <input
                type='text'
                name='url_video'
                placeholder='https://url-video.com'
                required
                defaultValue={url_video}
              />
            </div>

            <div className='form__description'>
              <label htmlFor='description'>Descripción</label>
              <textarea name='description' placeholder='Descripción del video' defaultValue={description}></textarea>
            </div>

            <div className='form__buttons'>
              <input
                className='button_ok'
                type='submit'
                value='Editar'
                disabled={!isValid}
                aria-label='Boton de edicion de video'
              />
              <input
                className='button_cancel'
                type='button'
                value='Cancelar'
                onClick={close}
                aria-label='Boton de cancelar edicion de video'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
