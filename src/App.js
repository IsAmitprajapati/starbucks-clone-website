import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
   <div className='sm:mb-0 overflow-hidden '> 
      <Header/>
      <Outlet/>
      <Footer/>
   </div>
  );
}

export default App;
