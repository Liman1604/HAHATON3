import { Pagination } from "@mui/material";
import React, { useContext } from "react";
import { ClientContext } from "../context/ClientProvider";

const ProductsPagination = () => {
  const { totalProductsCount, productsPerPage, setCurrentPage } =
    useContext(ClientContext);
  const count = Math.ceil(totalProductsCount / productsPerPage);
  return (
    <div className="products-pagination">
      <Pagination
        style={{backgroundColor:'white',borderRadius:'10px'}}
        onChange={(_, value) => setCurrentPage(value)}
        count={count}
        color="primary"
      />
    </div>
  );
};

export default ProductsPagination;
