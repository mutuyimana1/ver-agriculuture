import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "../App";
import HomePage from '../pages/homePage';
import AboutUs from '../pages/aboutUs';
import ContactUs from '../pages/contactUs';
import Gallery from '../pages/gallery';
import Project from '../pages/project';
const MainRouter = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home/about" element={<AboutUs/>}/>
      <Route path="/home/contact" element={<ContactUs/>}/>
      <Route path="/home/gallery" element={<Gallery/>}/>
      <Route path="/home/project" element={<Project/>}/>
    </Routes>
    </Router>
  );
};
export default MainRouter;