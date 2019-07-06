
import React from "react";
const ProductsList = (props) => (<div>ProductsList{props.url && props.url.query.title}</div>);

export default ProductsList;