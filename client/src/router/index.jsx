import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '@layouts/MainLayout.jsx'
import { Home, NotFound, Settlements, Transactions } from '@pages'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'settlements',
                element: <Settlements />
            },
            {
                path: 'transactions',
                element: <Transactions />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;