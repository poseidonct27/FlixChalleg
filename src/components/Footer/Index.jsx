import LogoBrand from '../LogoBrand';

const Index = () => {
  return (
    <footer aria-label='Pie de pagina'>
      <LogoBrand />
      <div className='footer__author' aria-label='Creador del proyecto'>
        Creado por{' '}
        <a href='https://github.com/poseidonct27' target='_blank' aria-label='Ir a la pagina de Github'>
          Jordy Leon
        </a>{' '}
        para AluraLatam y Oracle Next Education(ONE)
      </div>
    </footer>
  );
};

export default Index;
