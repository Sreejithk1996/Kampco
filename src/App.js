import MainPage from "./Components/mainpage/MainPage";
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Customers from './Components/customers/Customers'
import Dashboard from "./Components/dashboard/Dashboard";
import ServiceOrders from "./Components/service-orders/ServiceOrders";
import Services from "./Components/services/Services";
import Products from "./Components/products/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage/>,
      children: [
        {
          path: '/',
          index:true,
          element: <Dashboard/>
        },
      
        {
          path: '/service-orders',
          element: <ServiceOrders/>
        },
      
        {
          path: '/services',
          element: <Services/>
        },
      
        {
          path: '/products',
          element: <Products/>
        },
      
        {
          path: '/customers',
          element: <Customers/>
        }
      ]
    },
  
    
   
  ])
  return (
    <RouterProvider router = {router}/>

  );
}

export default App;
