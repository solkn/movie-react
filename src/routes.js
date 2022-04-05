import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import DashboardApp from './pages/DashboardApp';
import GetMovies from './features/movie/Views/movie_list_page';
import AddMovie from './features/movie/Views/movie_add_page';

import NotFound from './pages/Page404';


export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'movie',element:<GetMovies />},
        { path: 'newMovie',element:<AddMovie />},


      ]
    },
    
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
