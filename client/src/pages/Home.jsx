import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import BlogList from '../components/BlogList';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <BlogList />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
