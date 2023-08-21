import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Header} from "./containers/Header/Header.jsx"
import { Home } from "./pages/Home/Home.jsx";
import { Marketing } from './pages/Marketing/Marketing.jsx';
import { ProdAudiovisual } from './pages/Prod-audiovisual/ProdAudiovisual.jsx';
import { Consultancias } from './pages/Consultancias/Consultancias.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Services/Marketing' element={<Marketing />} />
          <Route path='/Services/Audiovisual-production' element={<ProdAudiovisual />} />
          <Route path='/Services/Consultancias' element={<Consultancias />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
