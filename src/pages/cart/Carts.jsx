import React, { useEffect } from "react";
import "./Carts.css";
import { deleteData, getCartsData } from "../services/api";
import { IoTrash } from "react-icons/io5";
import { Link } from "react-router-dom";

function Carts({ cartsData, setCartsData }) {
  useEffect(() => {
    getCartsData()?.then(setCartsData);
  }, []);

  return (
    <div className="carts-border">
      <div className="container">
        {cartsData?.length === 0 ? (
          <div className="cart-nottokens">
            <img src="/imgs/cart.gif" alt="" />
            <p>Savatchangiz bo'sh, maxsulotlar qo'shing</p>
          </div>
        ) : (
          cartsData?.map((item, index) => {
            return (
              <Link
                to={`/productDetail/${item?.product}`}
                className="carts-boxs"
                key={item?.id}
              >
                <div className="carts-boxs-titles">
                  <span>{index + 1}.</span>
                  <div className="rasm">
                    <img src={item?.product_image} alt="" />
                  </div>
                  <h3>
                    {item?.product_title.length > 23
                      ? item?.product_title.slice(0, 23) + "..."
                      : item?.product_title}
                  </h3>
                  <p>{item?.product_brand}</p>
                </div>
                <div className="carts-boxs-contents">
                  <p>{item?.product_price}$</p>
                  <p>{item?.product_discount_price}$</p>
                  <p
                    onClick={(e) => {
                      e.preventDefault();
                      deleteData(item?.id, setCartsData);
                    }}
                  >
                    <IoTrash />
                  </p>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Carts;
