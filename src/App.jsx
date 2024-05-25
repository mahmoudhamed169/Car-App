import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.min.css'

import HomePage from './Components/HomePage/HomePage'
import AllVehicles from './Components/AllVehicles/AllVehicles'
import { Navigate, RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import MainPage from './Components/MainPage/MainPage'
import CarDetailes from './Components/CarDetailes/CarDetailes'
import VehiclesLayout from './Components/VehiclesLayout/VehiclesLayout'

function App() {
  const routes = createHashRouter([{
    path: "/",
    element: <MasterLayout />,
    children: [
      { index: true, element: <Navigate to="home" /> },
      {
        path: "/home", element: <HomePage />, children: [
          { path: "", element: <MainPage /> },
          {
            path: "all-vehicles", element: <VehiclesLayout />, children: [
              { path: '', element: <AllVehicles /> },
              { path: ':id', element: <CarDetailes /> }]
          }]
      }
    ]

  }])


  return (
    <>
      <div className='overflow-hidden' >
        <RouterProvider router={routes} />

      </div>

    </>
  )
}

export default App
