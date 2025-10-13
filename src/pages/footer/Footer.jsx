import React from "react";
import "./Footer.css";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiUserCommunityFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="border-title">
            <h1>The Future Is Yours</h1>
            <div className="social-getby">
              <NavLink to={"/aboutus"}>Biz haqimizda</NavLink>
              <p
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Yangiliklar
              </p>
            </div>
          </div>
          <div className="border-social">
            <div className="social-getby">
              <p>Ijtimoiy tarmoqlar</p>
              <p className="social">
                <a
                  href="https://www.instagram.com/primetechuz?igsh=NncwZjA1amFoeXd4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                  Instagram
                </a>
              </p>
              <p className="social">
                <a
                  href="https://t.me/PrimeTechUz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegramPlane /> Telegram kanal
                </a>
              </p>
            </div>
            <div className="social-getby">
              <p>Murojaat uchun</p>
              <p className="social">
                <a href="tel:+998912830912">
                  <BsFillTelephoneFill />
                  +998912830912
                </a>
              </p>
              <p className="social">
                <a
                  href="https://t.me/PrimeTechUz_admin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiUserCommunityFill />
                  Murojaat uchun
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
