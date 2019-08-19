import Vue from 'vue';
import Router from 'vue-router';

// CATEGORIES

import PrintingPressPage from '../docs/PrintingPress/PrintingPressPage';
import BootCampPage      from '../docs/BootCamp/BootCampPage';
import StudioPage   from '../docs/Studio/StudioPage';
import ComputerPlazaPage      from '../docs/computerplaza/ComputerPlazaPage';
import TrainingSchoolPage from '../docs/School/TrainingSchoolPage';
import CyberCafePage from '../docs/Cafe/CyberCafePage';
import HomePage from '../docs/HomePage';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    // CATEGORIES
    {
      path: '/school',
      name: 'TrainingSchoolPage',
      component: TrainingSchoolPage
    },
    {
      path: '/computerplaza',
      name: 'ComputerPlazaPage',
      component: ComputerPlazaPage
    },
    {
      path: '/studio',
      name: 'StudioPage',
      component: StudioPage
    },
    {
      path: '/cafe',
      name: 'CyberCafePage',
      component: CyberCafePage
    }, {
      path: '/printingpress',
      name: 'PrintingPress',
      component: PrintingPressPage
    },
    {
      path: '/avakennbootcamp',
      name: 'BootCamp',
      component: BootCampPage
    },
    
  ]
});
