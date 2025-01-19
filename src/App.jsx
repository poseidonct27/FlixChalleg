import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Index';
import Navbar from './components/Navbar/Index';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer position='bottom-right' />
      <Footer />
    </>
  );
}

export default App;
