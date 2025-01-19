import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CardVideo from '../components/CardVideo';
import ModalYoutubePlayer from '../components/ModalYoutubePlayer/Index';
import { Categories } from '../data/Categories';
import HomeContext from '../hooks/HomeContext';
import { GetAllVideosService, RemoveVideoService, UpdateVideoService } from '../services/Controller';
import './home.css';

const getCategoryFromId = (id) => Categories.filter((x) => x.id == id);

const getCategoryName = (id) => getCategoryFromId(id)[0].name;

const getCategoryColor = (id) => getCategoryFromId(id)[0].color;

const Home = () => {
  const [listVideos, setListVideos] = useState([]);

  const [lastSelection, setLastSelection] = useState();

  const [showModalYoutubeLastSelection, setShowModalYoutubeLastSelection] = useState(false);

  const loadVideos = async () => {
    const allVideos = await GetAllVideosService();
    setListVideos(allVideos);
    setLastSelection(allVideos[allVideos.length - 1]);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  const deleteVideo = (id) => {
    toast.promise(RemoveVideoService(id), {
      pending: 'Eliminando video...',
      success: {
        render: () => {
          loadVideos();
          return 'Video eliminando correctamente';
        },
      },
    });
  };

  return (
    <>
      <HomeContext.Provider
        value={{
          editVideo: (x) => {
            toast.promise(UpdateVideoService(x), {
              pending: 'Actualizando video...',
              success: {
                render: () => {
                  setListVideos((list) => list.map((y) => (y.id == x.id ? x : y)));
                  return 'Video actualizado exitosamente';
                },
              },
            });
          },
        }}
      >
        <main>
          <div className='main_header'>
            {lastSelection && (
              <>
                <img
                  className='main_header-background'
                  src={lastSelection.url_image}
                  alt={`Imagen del video ${lastSelection.title}`}
                />
                <img
                  className='main_header-image'
                  src={lastSelection.url_image}
                  alt={`Imagen del video ${lastSelection.title}`}
                />

                <div className='main_header-info'>
                  <h2>{lastSelection.title}</h2>
                  <pre>{lastSelection.description}</pre>
                  <h3 style={{ backgroundColor: `var(${getCategoryColor(lastSelection.category)})` }}>
                    {getCategoryName(lastSelection.category)}
                  </h3>
                </div>

                <div className='main_header-actions'>
                  <button className='card_link' onClick={() => setShowModalYoutubeLastSelection(true)}>
                    Ver el video
                  </button>
                </div>
              </>
            )}
          </div>

          {showModalYoutubeLastSelection && (
            <ModalYoutubePlayer
              urlVideo={lastSelection.url_video}
              close={() => setShowModalYoutubeLastSelection(false)}
            />
          )}
        </main>

        <div>
          {Categories.map((category) => (
            <section key={category.id}>
              <h2 className='list_videos-title' style={{ '--cl-card-primary': `var(${category.color})` }}>
                {category.name}
              </h2>
              <div className='list_videos'>
                {listVideos
                  .filter((x) => x.category == category.id.toString())
                  .map((y) => (
                    <CardVideo key={y.id} video={y} color={category.color} removeVideo={deleteVideo} />
                  ))}
              </div>
            </section>
          ))}
        </div>
      </HomeContext.Provider>
    </>
  );
};

export default Home;
