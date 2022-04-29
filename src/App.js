import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Films from './pages/Films';
import Characters from './pages/Characters';
import Planets from './pages/Planets';
import Species from './pages/Species';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/films" element={<Films />} />
        <Route exact path="/characters" element={<Characters />} />
        <Route exact path="/species" element={<Species />} />
        <Route exact path="/planets" element={<Planets />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;