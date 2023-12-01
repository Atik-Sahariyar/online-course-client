import Footer from "../Shared/NavBar/Footer";
import Banner from "./Banner";
import Courses from "./Courses/Courses";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Courses></Courses>
            <Footer></Footer>
        </div>
    );
};

export default Home;