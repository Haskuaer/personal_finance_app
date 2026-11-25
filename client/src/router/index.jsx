import { createBrowserRouter } from 'react-router-dom'

import { Home, NotFound, Settlements, Transactions } from '@pages'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/transactions',
        element: <Transactions />
    },
    {
        path: '/settlements',
        element: <Settlements />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;