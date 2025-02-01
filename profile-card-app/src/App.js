import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <ProfileCard 
        name="Sujit Singh" 
        image="https://dezign2web.com/sujit-portfolio/images/Sujit.jpeg" 
        bio="Full-Stack Developer | Passionate about React.js and Node.js"
      />
      <ProfileCard 
        name="John Doe" 
        image="https://mediaslide-us.storage.googleapis.com/imgmodels/pictures/2970/73488/profile-1677707808-2e11d086365154c0849e69aaf56b1175.jpg" 
        bio="Frontend Developer | Loves JavaScript and CSS"
      />
    </div>
  );
};

export default App;
