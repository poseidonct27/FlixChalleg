import { useEffect, useState } from 'react';
import { IoCloseCircle } from 'react-icons/io5';
import YouTube from 'react-youtube';
import './modalYoutubePlayer.css';

const Index = ({ close, urlVideo }) => {
  const [idVideo, setIdVideo] = useState('');

  useEffect(() => {
    if (urlVideo.startsWith('https://www.youtube.com/')) setIdVideo(urlVideo.split('=')[1]);
    else setIdVideo(urlVideo.split('/')[urlVideo.split('/').length - 1]);
  }, []);

  return (
    <div className='modal' aria-label='Modal de reproduccion de video'>
      <div className='modal_body'>
        <button className='modal_body-btn-close' onClick={close} aria-label='Cerrar modal de reproduccion de video'>
          <IoCloseCircle />
        </button>
        <div className='modal_body-content'>
          <YouTube videoId={idVideo} opts={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default Index;
