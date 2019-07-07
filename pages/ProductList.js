
import React from "react";
const ProductList = (props) => (<div>ProductsList{props.url && props.url.query.title}</div>);

export default ProductList;