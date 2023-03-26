import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewLogin from './login/ViewLogin';
import ViewHome from './home/ViewHome';

import './app.css';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<ViewLogin />} />
        <Route path="home" element={<ViewHome />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
