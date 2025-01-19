import { useEffect, useRef } from 'react';
import { Categories } from '../../data/Categories';
import { UseValidateForm } from '../../hooks/UseValidateForm';
import HomeContext from '../../hooks/HomeContext';
import { useContext } from 'react';

const Index = ({ close, editVideo, video: { title, category, url_image, url_video, description } }) => {
  const { setVideoToEdit } = useContext(HomeContext);

  const formNewVideo = useRef(null);

  const { isValid, setForm, validateForm, formData } = UseValidateForm();

  useEffect(() => {
    setForm(formNewVideo.current);
  }, []);

  return (
    <div className='modal'>
      <div className='modal_body'>
        <span className='modal_body-title'>Editar video</span>
        <div className='modal_body-content'>
          <form
            data-type='modal'
            ref={formNewVideo}
            onSubmit={(x) => {
              setVideoToEdit(formData);
              editVideo(x, formData);
            }}
            className='form__new-video'
            onChange={validateForm}
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
              <input className='button_ok' type='submit' value='Editar' disabled={!isValid} />
              <input className='button_cancel' type='button' value='Cancelar' onClick={close} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
