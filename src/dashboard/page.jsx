import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Cards from "./Cards";
import Footer from "./Footer";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
  integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;

const Page = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Cards />
      <Footer />
    </div>
  );
};

export default Page;
