import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components
import editProduct from "./editProduct";
import User from "./User";

export default function ProductList({ user }) {
  const PRODUCT_API_BASE_URL = "http://localhost:8080/api/v1/product";
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
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
  }, [user, responseProduct]);

  const deleteProduct = (e, id) => {
    let confirmed = confirm("Are you sure you wanna delete this user?");
    if (!confirmed) return;
    e.preventDefault();
    fetch(USER_API_BASE_URL + "/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (products) {
        setProducts((prevElement) => {
          return prevElement.filter((user) => user.id !== id);
        });
      }
    });
  };

  const editProduct = (e, id) => {
    e.preventDefault();
    setUserId(id);
  };
  return (
    <>
      <div className=" w-28 h-28 mt-16">.</div>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 mt-16 shadow-lg rounded "
        }
      >
        <div className="rounded-t mb-0 px-4 py-3  border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className={"font-semibold text-lg "}>Users</h3>
            </div>
          </div>
        </div>
        <div className=" w-full overflow-x-auto flex justify-center  ">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle bg-blueGray-200 border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Product Name
                </th>
                <th
                  className={
                    "px-6 align-middle border bg-blueGray-200 border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Product Description
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid bg-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Product Type
                </th>
                <th className="px-6 align-middle border  bg-blueGray-200 border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                  Product Image Url
                </th>
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {products?.map((product) => (
                  <User
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
