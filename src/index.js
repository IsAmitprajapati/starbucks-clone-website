import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home from './page/Home';
import Gift from './page/Gift';
import Order from './page/Order';
import Pay from './page/Pay';
import Store from './page/Store';
import Profile from './page/Profile';
import Search from './page/Search';
import Welcome from './page/Welcome';
import Rewards from './page/Rewards';
import GiftFeature from './component/GiftFeature';
import GiftAnytime from './component/GiftAnytime';
import GiftCong from './component/GiftCong';
import GiftThank from './component/GiftThank';


const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/dashboard' element={<Home />} />
      <Route path='/giftcards' element={<Gift />} >
        <Route path='' element={<GiftFeature/>}/>
        <Route path='anytime' element={<GiftAnytime/>}/>
        <Route path='Congratulations' element={<GiftCong/>}/>
        <Route path='thank' element={<GiftThank/>}/>
      </Route>
      <Route path='/ordering' element={<Order />} />
      <Route path='/pay' element={<Pay />} />
      <Route path='/store' element={<Store />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/search' element={<Search />} />
      <Route path='/rewards' element={<Rewards />} />
    </Route>
    <Route path='/welcome' element={<Welcome />} />
  </>

))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
