import React from 'react';
import Article from './Article/Article'
import Header from './Header/Header'
import Contact from './Contact/Contact';

const blog = () => {
    return (
        <div>
            <Header />
            <Article />
            <Contact />
        </div>
    )
}

export default blog;