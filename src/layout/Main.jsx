import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../component/Footer';

import Header from '../component/Header';

export const ProductContext = createContext([])

const Main = () => {
  let {data} = useLoaderData()
    return (
      <ProductContext.Provider value={data}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </ProductContext.Provider >
    );
};

export default Main;