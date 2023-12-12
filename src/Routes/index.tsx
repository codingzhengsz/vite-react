import { createBrowserRouter } from 'react-router-dom';

import About from './About';
import Home from './Home';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

export default browserRouter;
