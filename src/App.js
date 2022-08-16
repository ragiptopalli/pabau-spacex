import { Routes, Route } from 'react-router-dom';

import Navigation from './pages/navigation/navigation.component';
import About from './pages/about/about.component';
import Home from './pages/home/home.component';
import PastMissions from './pages/past-missions/past-missions.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/past-missions' element={<PastMissions />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
