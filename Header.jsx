import React, { useState } from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Service from "./Service";

function Header() {
  const [siteTitle, setSiteTitle] = useState("ZOHO");
  const [page, setPage] = useState("Home");

  const renderPage = () => {
    switch (page) {
      case "Home":
        return <Home />;
      case "About Us":
        return <AboutUs />;
      case "Contact":
        return <Contact />;
      case "Service":
        return <Service />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <header style={{
        background: "#333",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2 style={{ color: "white", margin: 0 }}>{siteTitle}</h2>
        <nav style={{ display: "flex", gap: "15px" }}>
          <button onClick={() => { setPage("Home"); setSiteTitle("Home"); }}>Home</button>
          <button onClick={() => { setPage("About Us"); setSiteTitle("About Us"); }}>About Us</button>
          <button onClick={() => { setPage("Contact"); setSiteTitle("Contact"); }}>Contact</button>
          <button onClick={() => { setPage("Service"); setSiteTitle("Service"); }}>Service</button>
        </nav>
      </header>

      <h1 style={{ textAlign: "center", marginTop: "30px" }}>{page}</h1>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {renderPage()}
      </div>
    </div>
  );
}

export default Header;
