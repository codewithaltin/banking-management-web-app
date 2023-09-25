import React from "react";

const Product = ({ product, deleteProduct, editProduct, getProductsId }) => {
  return (
    <tr key={product.id}>
      <td className="border-t-0 bg-blueGray-100 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 font-semibold tracking-wide">
        {product.id}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 font-semibold tracking-wide">
        {product.name}
      </td>

      <td className="border-t-0  bg-blueGray-100 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4  tracking-wide">
        {product.desc}
      </td>

      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4  tracking-wide">
        {product.type}
      </td>

      <td className="border-t-0 bg-blueGray-100  px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4  tracking-wide">
        <a
          onClick={(e, id) => deleteProduct(e, product.id)}
          className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
        >
          Delete
        </a>
      </td>
      <td className="border-t-0 px-6 bg-blueGray-100  align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 overflow-hidden max-w-100-px tracking-wide">
        <a
          onClick={(id) => getProductsId(product.id)}
          className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
        >
          Update
        </a>
      </td>
      <td className="border-t-0 px-6 align-middle bg-blueGray-100  border-l-0 border-r-0 text-s whitespace-nowrap p-4 overflow-hidden max-w-100-px tracking-wide">
        <a className="text-indigo-600 hover:text-indigo-800 cursor-pointer">
          Select
        </a>
      </td>
    </tr>
  );
};

export default Product;
