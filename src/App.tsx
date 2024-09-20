import React from 'react';
import Layout from '../src/features/dashboard/components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Canhan from './features/dashboard/components/canhan/canhan';

const App: React.FC = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/canhan" element={<Canhan />} />
        <Route path="/supreme-court" element={<h1>Tòa án nhân dân tối cao</h1>} />
      </Routes>
    </>
  );
}

export default App;
