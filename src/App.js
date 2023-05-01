
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './views/Home';
import Shop from './views/Shop';
import { useState } from 'react';
import Cart from './views/Cart';
import Checkout from './views/Checkout';
import AdminSignin from './components/AdminSignin';
import AdminHome from './views/AdminHome';

// a quick note on props vs state:
// props- is an object of arbitary inputs a React component accepts as the first arguement
// State- is data that changes over the lifetime of a specific instance of a react component

function App() {
  const [teachers, setTeachers] = useState(['Brendan', 'Brandt', 'Aubrey', 'Rachel', 'Mikelyn']);

  const [admin, setAdmin] = useState({'in': false, 'token': ''})
  return (

    <div className="App">
      <Nav teachers={teachers} admin={admin}/>
      <Routes>
        {/*  any 'page' of our app can be defined as a route here */}
        <Route children path='/' element={<Home teachers={teachers} setTeachers={setTeachers}/>} />
        <Route children path='/shop' element={<Shop />} />
        <Route children path='/cart' element={<Cart />} />
        <Route children path='/checkout' element={<Checkout />} />
        <Route children path='/adminsignin' element={<AdminSignin admin={admin} setAdmin={setAdmin}/>} />
        <Route children path='/adminhome' element={<AdminHome admin={admin} />} />

      </Routes>

    </div>
  );
}

export default App;