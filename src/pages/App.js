import { useRoutes } from 'react-router-dom';
import { getRoutes } from '../layouts/routes';

function App() {
  // const[routerType,setRouterType] = useState(0)
  const userRole = typeof window !== "undefined" ? sessionStorage.getItem("ur") : null;
  const routeType =userRole !== null ? userRole : 0
  const router = useRoutes(getRoutes(routeType));


  
  return (
    <>
      {/* <Provider store={store}> */}
          {router}
          {/* <LazyLoader>{router}</LazyLoader> */}
      {/* </Provider> */}
      
    </>
  );
}

export default App;
