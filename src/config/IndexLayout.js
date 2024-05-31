import React from "react";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import { Outlet } from "react-router-dom";
import Menu from "../components/common/Menu/Menu";
import { MenuProvider } from "../contexts/MenuContext";
import { ScrollProvider } from "../contexts/ScrollToTop";

const IndexLayout = () => {
  const divStyle = {
    position: "relative",
  };

  return (
    <MenuProvider>
      <div style={divStyle}>
        <ScrollProvider>
          <Menu layout="index" />
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </ScrollProvider>
      </div>
    </MenuProvider>
  );
};

export default IndexLayout;
