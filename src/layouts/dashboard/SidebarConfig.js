// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill')
  },

  {
    title:'movies',
    path:'/dashboard/movie',
    icon: getIcon('eva:lock-fill')

  },

  {
    title:'newMovie',
    path:'/dashboard/newMovie',
    icon: getIcon('eva:lock-fill')

  }

];

export default sidebarConfig;
