import React from 'react';
import Nav from '../containers/Nav';
import Footer from '../containers/Footer';
import Login from '../containers/Login';
import ItemProduct from '../components/ItemProduct';
import SeccionCalentado from '../containers/SeccionCalentado';

const Home = () => {
    return (
        <>
            <Nav/>
            <SeccionCalentado/>
            <Footer/>
        </>
    );
}

export default Home;