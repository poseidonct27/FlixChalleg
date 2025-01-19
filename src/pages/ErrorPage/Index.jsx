import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router';

const Index = () => {
  return (
    <>
      <div className=''>
        <DotLottieReact src='/anims/404.lottie' autoplay loop height={'70px'} />
      </div>
      <h3 style={{ textAlign: 'center', marginBottom: '4rem', padding: '1rem' }}>
        No encontramos la pagina que buscas, te puede interesar ir al{' '}
        <Link to={'/'} style={{ color: 'var(--cl-primary)' }}>
          inicio
        </Link>{' '}
        y ver todo el contenido disponible
      </h3>
    </>
  );
};

export default Index;
