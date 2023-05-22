import React from 'react';
import { Breathing } from 'react-shimmer'
import { Route,Routes} from 'react-router-dom';

const Home = React.lazy(() => import("../Pages/Home/Home"));
const ViewProductDetail = React.lazy(() => import("../Pages/Detail/ViewProductDetail"));

const Routing = () => {

    const Student = [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/product/:id',
            component: ViewProductDetail,
        }
    ]

  return (
        <>
        <Routes>
            {
              Student.map((route) => {
                return <Route path={route.path} element={<React.Suspense fallback={<>
                <Breathing width={1200} height={1000} /></>}>
                    <route.component/>
                </React.Suspense>}/>
            })
            }
        </Routes>
    </>
  )
}

export default Routing