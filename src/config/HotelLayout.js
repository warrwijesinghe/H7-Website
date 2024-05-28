import React from 'react';
import HeaderHotel from '../components/common/HeaderHotel/HeaderHotel';
import FooterHotel from '../components/common/FooterHotel/FooterHotel';
import { Outlet } from 'react-router-dom';

const HotelLayout = () => {
  return (
    <div>
      <HeaderHotel />
        <main>
          <Outlet />
        </main>
        <FooterHotel />
    </div>
  )
}

export default HotelLayout;
