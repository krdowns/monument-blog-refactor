import React from 'react';
import Article from './Article/Article';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const blog = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <Article />
            <Contact />
            <Footer />
        </div>
    )
}

export default blog;