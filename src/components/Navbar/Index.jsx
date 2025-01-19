import { useEffect, useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router';
import LogoBrand from '../LogoBrand';
import './nav.css';

const Index = () => {
  const [changeLocation, setChangeLocation] = useState(false);

  const allPatchs = document.getElementsByClassName('nav__link');

  const handleLocationEffect = () => {
    Array.from(allPatchs).forEach((x) => {
      x.href.replace(location.origin, '') === location.pathname ?
        x.setAttribute('data-enabled', true)
      : x.setAttribute('data-enabled', false);
    });
  };

  useEffect(() => handleLocationEffect(), [changeLocation]);

  return (
    <nav aria-label='Menu principal'>
      <Link to='/'>
        <LogoBrand />
      </Link>
      <ul className='nav__menu'>
        <li>
          <Link
            className='nav__link'
            to='/'
            data-enabled={true}
            onClick={() => setChangeLocation(!changeLocation)}
            aria-label='Ir a la pagina de inicio'
          >
            <span className='nav__menu-icon'>
              <MdHome />
            </span>
            Home
          </Link>
        </li>
        <li>
          <Link
            className='nav__link'
            to='/agregar-video'
            onClick={() => setChangeLocation(!changeLocation)}
            aria-label='Ir a la pagina de agregar video'
          >
            <span className='nav__menu-icon'>
              <IoMdAddCircle />
            </span>
            Nuevo video
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Index;
