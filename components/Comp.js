import React from "react";
import { BrowserRouter, Match, Link as NewLink, Route } from "react-router";

import ProductsList from './ProductList'

const Comp = () => {
  
  return (
    <div>
      123
      <ProductsList/>
      {/* <BrowserRouter>
        <Route path={`/`} component={'ProductsList'} />
      </BrowserRouter> */}
    </div>
  );
};

export default Comp;