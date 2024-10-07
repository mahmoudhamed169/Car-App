
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Cars from '../Cars/Cars';
import HowWork from '../HowWork/HowWork';
import WhyUs from '../WhyUs/WhyUs';
import Testimonials from '../Testimonials/Testimonials';
import Download from '../Download/Download';
import Footer from '../Footer/Footer';

const MainPage = () => {
    return (
        <div>
            <NavBar />
            <Home />
            <Cars />
            <HowWork />
            <WhyUs />
            <Testimonials />
            <Download />
            <Footer />
        </div>
    );
}

export default MainPage;
