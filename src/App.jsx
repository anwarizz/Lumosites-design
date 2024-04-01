import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Contact from './pages/Contact'
import About from './pages/About'
import Snk from './pages/SNK'
import Dynamic from './pages/Dynamic'
import Login from './pages/Login'
import Static from './pages/Static'
import Custom from './pages/Custom'

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/s&k',
      element: <Snk />
    },
    {
      path: 'service/1',
      element: <Dynamic />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'service/2',
      element: <Static />
    },
    {
      path: 'service/3',
      element: <Custom />
    }
  ])

  return (
    <RouterProvider router={route} />
  )
}

export default App
