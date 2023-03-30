import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Statistique from './pages/Statistique';
import NotFound from './pages/NotFound';


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home />
        },

        {
            path: '/statistique',
            element: <Statistique />
        },

        {
            path: '*',
            element: <NotFound />
        },
    ]);

export default router
