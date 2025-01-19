import './brand.css';

const index = () => {
  return (
    <div className='brand' aria-label='Logo de la aplicación Aluraflix PRO'>
      <img src='/images/logo.webp' alt='Logo aluraflix pro app' />
      <span className='brand__pro'>PRO</span>
    </div>
  );
};

export default index;
