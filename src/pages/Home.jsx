import React from 'react';
import Nav from '../containers/Nav';
import Footer from '../containers/Footer';
import Login from '../containers/Login';
import ItemProduct from '../components/ItemProduct';

const Home = () => {
    return (
        <>
            <Nav/>
            <ItemProduct/>
            <ItemProduct/>
            <ItemProduct/>
            <Footer/>
        </>
    );
}

export default Home;