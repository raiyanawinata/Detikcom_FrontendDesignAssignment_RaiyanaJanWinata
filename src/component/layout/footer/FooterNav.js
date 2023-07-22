import { Typography } from "@material-tailwind/react";
import "./footer.css";

export default function FooterNav() {
  return (
    <footer className="w-full footer-container">
      <div className="footer-content">
        <img
          src={require("../../../assets/img/Navbar Brand.png")}
          alt="logo-ct"
          className="footer-logo"
        />
        
        </div>
        <div className="font-semibold">
          <p className="tekscap">
            Detikfinance memberikan ruang kepada para startup di Indonesia untuk menunjukkan,
            serta <br/> mempromosikan brand mereka untuk mendapatkan perhatian dari venture capital
            atau angel investor
          </p>
        </div>
        <div className="ml-auto footer-icon-container">
          <img
            src={require("../../../assets/img/tw.png")}
            alt="twitter-icon"
            className="footer-icon"
          />
          <img
            src={require("../../../assets/img/ig.png")}
            alt="instagram-icon"
            className="footer-icon"
          />
          <img
            src={require("../../../assets/img/fb.png")}
            alt="facebook-icon"
            className="footer-icon"
          />
        
      </div>
      <hr className="footer-hr" />
      <Typography
        color="blue-gray"
        className="text-center2 font-medium footer-text"
        style={{ fontSize: '14px', lineHeight: '17.07px' }}
      >
        &copy; Detikcom. All rights reserved
      </Typography>
    </footer>
  );
}
