import React from "react";
import HeaderHotel from "../components/common/HeaderHotel/HeaderHotel";
import FooterHotel from "../components/common/FooterHotel/FooterHotel";
import { Outlet } from "react-router-dom";
import { MenuProvider } from "../contexts/MenuContext";
import { ScrollProvider } from "../contexts/ScrollToTop";
import Menu from "../components/common/Menu/Menu";

const HotelLayout = () => {
  const divStyle = {
    position: "relative",
  };

  return (
    <MenuProvider>
      <div style={divStyle}>
        <ScrollProvider>
          <Menu layout="hotel" />
          <HeaderHotel />
          <main>
            <Outlet />
          </main>
          <FooterHotel />
        </ScrollProvider>
      </div>
    </MenuProvider>
  );
};

export default HotelLayout;
