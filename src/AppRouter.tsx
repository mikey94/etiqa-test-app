import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ratings from './screens/ratings/Ratings.container.tsx';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ratings />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;