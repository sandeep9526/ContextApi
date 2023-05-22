import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Routing from './Routing/Routing';
import BasketContextProvider from 'Store/BasketContext';
const Header = React.lazy(() => import("Layouts/Header/Header"));
const CardSidebar = React.lazy(() => import("Components/Cards/Sidebar/CardSidebar"));


const App = () => {

  return (
    <>
       <BasketContextProvider>
        <Header />
        <Routes>
              <Route path="/*" element={<Routing />} />
              <Route path="*" element={ < Navigate to='/' />} ></Route>
        </Routes>
         <CardSidebar />
      </BasketContextProvider> 
    </>
  )
}

export default App;