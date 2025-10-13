import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <div className="error-page">
        <div className="container">
           <div className="error-content">
               <div className="error-page_infos">
            <h1>4</h1>
            <h1>0</h1>
            <h1>4</h1>
          </div>
          <p>Sahifa topilmadi iltimos qayta urinib ko'ring</p>
          <Link to={"/"}>
              Asosiy sahifaga qaytish
          </Link>
           </div>
        </div>
      </div>
    </>
  );
}

export default Error;
