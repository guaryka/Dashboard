import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Canhan from './features/dashboard/canhan/canhan';
import Toaannhandantoicao from './features/dashboard/toaannhandantoicao/toaannhandantoicao';
import Login from './features/login/components/Login';

const App: React.FC = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/canhan" element={<Canhan />} />
        <Route path="/toaannhandantoicao" element={<Toaannhandantoicao />} />
      </Routes> */}
      <Login />
    </>
  );
}

export default App;
