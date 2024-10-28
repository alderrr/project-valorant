import {createBrowserRouter,redirect} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import RedirectPage from '../pages/RedirectPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    }
])

export default router