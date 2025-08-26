import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import CareerAssessement from "../Components/CareerAssessement";
import CourseRecommendation from "../Components/CourseRecommendation";
import Institution from "../Components/Institution";
import CareerPath from "../Components/CareerPath";
import Testimonial from "../Components/Testimonial";
import Faqs from "../Components/Faqs";
import Footer from "../Components/Footer";
import Life from "../Components/Life";


const Home = () => {
  return (
    <div>
      <Hero />
      {/*<Navbar />*/}
      <Life/>
      <CourseRecommendation />
      <CareerAssessement />
      <Institution />
      <CareerPath />
     <Testimonial />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;
