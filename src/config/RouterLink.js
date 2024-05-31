import React from "react";
import NotFound from "../pages/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Experience from "../pages/Experience/Experience";
import Hotels from "../pages/Hotels/Hotels";
import Blog from "../pages/Blog/Blog";
import Offers from "../pages/Offers/Offers";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import FAQ from "../pages/FAQ/FAQ";
import BlogPost from "../pages/BlogPost/BlogPost";
import IndexLayout from "./IndexLayout";
import HotelHome from "../pages/Hotel/HotelHome/HotelHome";
import HotelLayout from "./HotelLayout";
import HotelOffer from "../pages/Hotel/HotelOffer/HotelOffer";
import HotelExperiences from "../pages/Hotel/HotelExperiences/HotelExperiences";
import HotelContact from "../pages/Hotel/HotelContact/HotelContact";
import HotelAccommodation from "../pages/Hotel/HotelAccommodation/HotelAccommodation";
import HotelGallery from "../pages/Hotel/HotelGallery/HotelGallery";
import HotelDining from "../pages/Hotel/HotelDining/HotelDining";
import HotelFacilities from "../pages/Hotel/HotelFacilities/HotelFacilities";
import HotelRoomView from "../pages/Hotel/HotelRoomView/HotelRoomView";
import OfferView from "../pages/Hotel/OfferView/OfferView";
import HotelRestaurentView from "../pages/Hotel/HotelRestaurentView/HotelRestaurentView";
import HotelLocation from "../pages/Hotel/HotelLocation/HotelLocation";

const RouterLink = () => {
  return (
    <Routes>
      <Route element={<IndexLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/special-offers" element={<Offers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-post" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<HotelLayout />}>
        <Route path="/hotel/:hotel" element={<HotelHome />} />
        <Route path="/offers/:hotel" element={<HotelOffer />} />
        <Route path="/experience/:hotel" element={<HotelExperiences />} />
        <Route path="/contact/:hotel" element={<HotelContact />} />
        <Route path="/accommodation/:hotel" element={<HotelAccommodation />} />
        <Route path="/gallery/:hotel" element={<HotelGallery />} />
        <Route path="/dining/:hotel" element={<HotelDining />} />
        <Route path="/facilities/:hotel" element={<HotelFacilities />} />
        <Route path="/room/:hotel/:room" element={<HotelRoomView />} />
        <Route path="/offer/:hotel/:offer" element={<OfferView />} />
        <Route path="/restaurant/:hotel/:restaurant" element={<HotelRestaurentView />} />
        <Route path="/location/:hotel" element={<HotelLocation />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default RouterLink;
