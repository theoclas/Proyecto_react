import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'
// import Home from '../'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/My-Account', element: <MyAccount /> },
    { path: '/My-Order', element: <MyOrder /> },
    { path: '/My-Orders', element: <MyOrders /> },
    { path: '/*', element: <NotFound /> },
    { path: '/Sign-in', element: <Signin /> }
  ])
  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App