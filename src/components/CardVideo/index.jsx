import { useState } from 'react';
import { FaYoutube } from 'react-icons/fa';
import ModalEditVideo from '../ModalEditVideo/Index';
import ModalYoutubePlayer from '../ModalYoutubePlayer/Index';
import './cardVideo.css';

const Index = ({ video: { title, url_image, url_video, id, description }, video, removeVideo, color }) => {
  const [showModalEdit, setShowModalEdit] = useState(false);

  const [showModalYTPlayer, setShowModalYTPlayer] = useState(false);

  return (
    <>
      <div className='card_video' style={{ '--cl-card-primary': `var(${color})` }} aria-label='Tarjeta del video'>
        <button className='card_video-button-youtube' onClick={() => setShowModalYTPlayer(true)}>
          <span className='card_video-icon-youtube' title='Reproducir video'>
            <FaYoutube />
          </span>
          <img src={url_image} alt={`imagen del video ${title}`} aria-label='Imagen del video' />
        </button>
        <div className='card_video-content'>
          <h3 aria-label='Titulo del video'>{title}</h3>
          <span className='card_video-description' aria-label='Descripcion del video'>
            <pre>{description}</pre>
          </span>
          <div className='card_video-actions' aria-label='Acciones de la tarjeta del video'>
            <button onClick={() => setShowModalEdit(true)} aria-label='Boton de edicion de video'>
              Editar
            </button>
            <button onClick={() => removeVideo(id)} aria-label='Boton de eliminacion de video'>
              Eliminar
            </button>
          </div>
        </div>
      </div>
      {showModalEdit && <ModalEditVideo close={() => setShowModalEdit(false)} video={video} />}
      {showModalYTPlayer && <ModalYoutubePlayer close={() => setShowModalYTPlayer(false)} urlVideo={url_video} />}
    </>
  );
};

export default Index;
