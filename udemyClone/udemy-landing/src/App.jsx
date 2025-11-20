import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import Certifications from './components/Certifications.jsx';
import SecondBanner from './components/SecondBanner.jsx';
import CoursesSection from './components/CoursesSection.jsx';
import CategoryCourses from './components/CategoryCourses.jsx';
import TrustedCompanies from './components/TrustedCompanies.jsx';

function App() {
  return (
    <>
      <SearchBar />
      <HeroBanner />
      <Certifications />
      <SecondBanner />
      <CategoryCourses />
      <TrustedCompanies />
    </>
  );
}

export default App
