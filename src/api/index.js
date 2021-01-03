import testRoutes from './testapis'; 
import prodRoutes from './prodapis'; 

let routes = [];
routes = routes.concat(testRoutes);
routes = routes.concat(prodRoutes);

export default routes;