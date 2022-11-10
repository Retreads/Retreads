import React from 'react';
import Nav from '../containers/Nav';
import Footer from '../containers/Footer';
import SeccionCalentado from '../containers/SeccionCalentado';
import SeccionHamBgs from '../containers/SeccionHamBgs';
import SeccionPatacon from '../containers/SeccionPatacon';
import SeccionMenu from '../containers/SeccionMenu';
import SeccionBebidas from '../containers/SeccionBebidas';
import TitleMenu from '../components/TitleMenu';
// import Header from '../containers/Header';
import Banner from '../components/Banner';


const Home = () => {
    return (
        <>
            <Nav/>
            {/* <Header/> */}
            <Banner/>
            <TitleMenu/>
            <SeccionCalentado/>
            <SeccionHamBgs/>
            <SeccionPatacon/>
            <SeccionMenu/>
            <SeccionBebidas/>
            <Footer/>
        </>
    );
}

export default Home;