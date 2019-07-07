import React from "react";
import { withRouter } from 'next/router'
const ProductList = props => {
  console.log(props.router);
  return <div>ProductsList{props.router.pathname}</div>;
};

export default withRouter(ProductList)
