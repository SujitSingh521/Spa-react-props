import React from "react";
import Page from "../components/Page";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-text">
          <Page 
            title="Welcome to Our Website" 
            content="We provide the best solutions for your business. Explore our services and get in touch!" 
          />
          <button className="cta-button">Learn More</button>
        </div>
        <div className="home-image">
          <img 
            src="https://media.istockphoto.com/id/1273320106/vector/deep-space-planetary-rings-abstract-background.jpg?s=612x612&w=0&k=20&c=vkV-9H5VcRpGWG7WHVuIZRIPnLOhCWrwj8SBebTgLN0=" 
            alt="Home Banner" 
            className="home-banner" 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
