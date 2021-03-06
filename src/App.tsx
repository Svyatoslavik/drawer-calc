import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { PageCalcHafeleWoodPro } from './pages/PageCalcHafeleWoodPro/PageCalcHafeleWoodPro';
import { PageCaclBlum } from './pages/PageCalcBlum/PageCalcBlum';
import { PageCalcBlumAntaro } from './pages/PageCalcBlumAntaro/PageCalcBlumAntaro';
import { PageHome } from './pages/PageHome/PageHome';
import { MainLayout } from './layouts/MainLayout/MainLayout';



function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="blum" element={<PageCaclBlum />} />
        <Route path="antaro" element={<PageCalcBlumAntaro />} />
        <Route path="hafele" element={<PageCalcHafeleWoodPro />} />
     </Routes>
    </MainLayout>
    
  );
}

export default App;
