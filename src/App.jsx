// src/App.jsx

import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Agendar from './pages/Agendar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/agendar" element={<Agendar />} />
    </Routes>
  );
}

export default App;
