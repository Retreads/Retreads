import React from 'react';
import Nav from '../containers/Nav';
import Footer from '../containers/Footer';
import Login from '../containers/Login';
import ItemProduct from '../components/ItemProduct';
import SeccionCalentado from '../containers/SeccionCalentado';
import SeccionHamBgs from '../containers/SeccionHamBgs';
import SeccionPatacon from '../containers/SeccionPatacon';

const Home = () => {
    return (
        <>
            <Nav/>
            <SeccionCalentado/>
            <SeccionHamBgs/>
            <SeccionPatacon/>
            <Footer/>
        </>
    );
}

export default Home;