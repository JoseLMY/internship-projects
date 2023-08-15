import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Header} from "./containers/Header/Header.jsx"
import { Home } from './containers/Home/Home.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/hobbies' element={<Hobbies />} />
          <Route path='/sobre-mi' element={<SobreMi />} />
          <Route path='/tecnologias' element={<Tecnologias />} />
          <Route path='/contacto' element={<Contactame />} />
          <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
