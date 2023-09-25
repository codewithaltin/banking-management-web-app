import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components
import Product from "./Product";

export default function ProductList({ product }) {
  const PRODUCT_API_BASE_URL = "http://localhost:8080/api/v1/product";
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productId, setProductId] = useState(null);
  const [responseProduct, setResponseProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(PRODUCT_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [product, responseProduct]);

  const deleteProduct = (e, id) => {
    let confirmed = confirm("Are you sure you wanna delete this product?");
    if (!confirmed) return;
    e.preventDefault();
    fetch([PRODUCT_API_BASE_URL] + "/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (products) {
        setProducts((prevElement) => {
          return prevElement.filter((product) => product.id !== id);
        });
      }
    });
  };

  const editProduct = (e, id) => {
    e.preventDefault();
    setProductId(id);
  };
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 mt-16 shadow-lg rounded "
        }
      >
        <div className="rounded-t mb-0 px-4 py-3  border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className={"font-semibold text-lg "}>Products</h3>
            </div>
          </div>
        </div>
        <div className=" w-full overflow-x-auto flex justify-center  ">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse table-fixed border-2 ">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle bg-blueGray-100 border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  ID
                </th>
                <th
                  className={
                    "px-6 align-middle  border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Name
                </th>
                <th
                  className={
                    "px-6 align-middle border bg-blueGray-100 border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Description
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Type
                </th>

                <th
                  colSpan={3}
                  className={
                    " col-span-2 px-6  align-middle border min-w-full  bg-blueGray-100 overflow-hidden border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-middle "
                  }
                >
                  Actions
                </th>
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {products?.map((product) => (
                  <Product
                    product={product}
                    key={product.id}
                    deleteProduct={deleteProduct}
                    editProduct={editProduct}
                  />
                ))}
              </tbody>
            )}
          </table>
        </div>
        <editProduct
          productId={productId}
          setResponseProduct={setResponseProduct}
        />
      </div>
    </>
  );
}
