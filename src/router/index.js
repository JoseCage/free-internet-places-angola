import Vue from 'vue';
import Router from 'vue-router'
import Home from '@/components/Home/Home';
import Places from '@/components/Places/Places';
import PlaceInfo from '@/components/Places/PlaceInfo';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/places',
      name: 'Places',
      component: Places
    },
    {
      path: '/places/:id',
      name: 'PlaceInfo',
      component: PlaceInfo
    }
  ]
})
