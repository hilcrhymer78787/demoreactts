import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import * as React from 'react';

const App = () => (
  <BrowserRouter>
    <div className='nav'>
      <Link to="/">Home</Link>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
    </Routes>
  </BrowserRouter>
);

export default App;