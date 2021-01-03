import * as handlers from './handlers';
import apiRoutes from '../Routes'

let routes = [
  ...apiRoutes,
  {
    method: 'GET',
    path: '/loop',
    handler: handlers.loop
  }
];

export default routes;
